package com.scrumconnect.api.controller;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class SmokeTest {

    @Autowired
    private UserDataCommandController commandController;

    @Autowired
    private UserDataQueryController queryController;
    
    @Test
    public void contexLoads() throws Exception {
        assertThat(commandController).isNotNull();
        assertThat(queryController).isNotNull();
    }
}