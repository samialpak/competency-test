package com.scrumconnect.api.controller;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class HttpRequestTest {
	
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void shouldReturnUserDetails() throws Exception {
    	ArrayList jsonResponse = this.restTemplate.getForObject(
				"http://localhost:" + port + "/user/all", ArrayList.class);
    	
    	
    	assertThat(jsonResponse.size()).isGreaterThanOrEqualTo(0); 
    }
}