package com.scrumconnect.api.controller;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.scrumconnect.api.data.UserDataService;
import com.scrumconnect.api.data.model.UserData;
import com.scrumconnect.api.exception.UsersNotFoundException;

@WebMvcTest(UserDataQueryController.class)
public class UserDataQueryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDataService userDataService;

    @Test
    public void shouldReturnUsersFromService() throws Exception {
    	List<UserData> mockListUserData = Arrays.asList(
    			new UserData("John Smith", "male", 23, "GBR"),
                new UserData("Megan Smith", "female", 23, "GBR"));
    	
        when(userDataService.findAllUsers()).thenReturn(mockListUserData);
        
        this.mockMvc.perform(get("/user/all"))
        	.andDo(print())
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.[0].name").value("John Smith"))
            .andExpect(jsonPath("$.[0].sex").value("male"))
            .andExpect(jsonPath("$.[0].age").value(23))
        	.andExpect(jsonPath("$.[0].country").value("GBR"))
        	.andExpect(jsonPath("$.[1].name").value("Megan Smith"))
            .andExpect(jsonPath("$.[1].sex").value("female"))
            .andExpect(jsonPath("$.[1].age").value(23))
        	.andExpect(jsonPath("$.[1].country").value("GBR"));
    }
    
    @Test
    public void shouldReturnNoDataExceptionFromServiceFindAllUsers() throws Exception {
        when(userDataService.findAllUsers()).thenThrow(new UsersNotFoundException("Users list is empty"));
        
        this.mockMvc.perform(get("/user/all"))
            .andDo(print())
            .andExpect(status().isNotFound());
    }
}