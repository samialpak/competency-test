package com.scrumconnect.api.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.net.URI;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scrumconnect.api.data.UserDataService;
import com.scrumconnect.api.data.model.UserData;
import com.scrumconnect.api.exception.UserAlreadyExistException;

@WebMvcTest(UserDataCommandController.class)
public class UserDataCommandControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDataService userDataService;
    
    @Test
    public void shouldReturnSavedUserFromServiceSaveUser() throws Exception { 
    
    	UserData userDataTest = new UserData("John Smith", "male", 23, "GBR");
       	
        when(userDataService.saveUser(any())).thenReturn(new UserData("John Smith", "male", 23, "GBR"));
        
        this.mockMvc.perform(
        		post(URI.create("/user"))
       		 	.content(new ObjectMapper().writeValueAsString(userDataTest))
       		 	.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
       		)
           .andDo(print())
           .andExpect(status().isCreated())
           .andExpect(jsonPath("name").value("John Smith"))
           .andExpect(jsonPath("sex").value("male"))
           .andExpect(jsonPath("age").value(23))
           .andExpect(jsonPath("country").value("GBR"));
    }
    
    @Test
    public void shouldReturnAlreadyExistExceptionFromServiceAddPerson() throws Exception {   
    	UserData userDataTest = new UserData("John Smith", "male", 23, "GBR");
    	
        when(userDataService.saveUser(any())).thenThrow(new UserAlreadyExistException("User Already Exist"));
        this.mockMvc.perform(
        		post(URI.create("/user"))
    			.content(new ObjectMapper().writeValueAsString(userDataTest))
    			.contentType(MediaType.APPLICATION_JSON).accept(MediaType.APPLICATION_JSON)
    		)
        .andDo(print())
        .andExpect(status().isConflict());
    }
}