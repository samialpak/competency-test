package com.scrumconnect.api.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;

@Component
public class RequestInterceptor implements HandlerInterceptor {

    private final String CLIENT_ID = "443012302229-gn78fie39jmot2e6sog718glqcl60ihs.apps.googleusercontent.com";
    private final HttpTransport transport = new NetHttpTransport();
    private final JsonFactory jsonFactory = new JacksonFactory();

    @Override
    public boolean preHandle(HttpServletRequest requestServlet, HttpServletResponse responseServlet, Object handler) throws Exception
    {
        System.out.println("MINIMAL: INTERCEPTOR PREHANDLE CALLED");

        if(requestServlet.getMethod().equals("POST") || requestServlet.getMethod().equals("GET")){
            String idTokenString = requestServlet.getHeader("Authorization");;
            System.out.println("idTokenString: ");
            System.out.println(idTokenString);

            return verifyToken(idTokenString);
        }


        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception
    {
        System.out.println("MINIMAL: INTERCEPTOR POSTHANDLE CALLED");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception exception) throws Exception
    {
        System.out.println("MINIMAL: INTERCEPTOR AFTERCOMPLETION CALLED");
    }

    private boolean verifyToken(String idTokenString){
        try{
            GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                    .setAudience(Collections.singletonList(CLIENT_ID))
                    .build();

            GoogleIdToken idToken = verifier.verify(idTokenString);

            if (idToken != null) {

                GoogleIdToken.Payload payload = idToken.getPayload();

                System.out.println("Valid ID token:");
                System.out.println(payload);

                // Print user identifier
                String userId = payload.getSubject();
                System.out.println("User ID: " + userId);

                // Get profile information from payload
                String email = payload.getEmail();
                boolean emailVerified = Boolean.valueOf(payload.getEmailVerified());
                String name = (String) payload.get("name");
                String pictureUrl = (String) payload.get("picture");
                String locale = (String) payload.get("locale");
                String familyName = (String) payload.get("family_name");
                String givenName = (String) payload.get("given_name");

                return true;

            } else {
                System.out.println("Invalid ID token.");
                return false;
            }

        } catch (GeneralSecurityException e) {
            System.out.println("GeneralSecurityException throwed");
            return false;
        } catch (IOException e) {
            System.out.println("IOException throwed");
            return false;
        }
    }
}
