package com.scrumconnect.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.scrumconnect.api.data.UserDataService;
import com.scrumconnect.api.data.model.UserData;

@RestController
@RequestMapping("/user")
public class UserDataQueryController {
	
    private UserDataService userDataService;

    @Autowired
    public UserDataQueryController(UserDataService userDataService) {
        this.userDataService = userDataService;
    }

    @GetMapping("/all")
    public List<UserData> findAllUsers() {    	
    	return this.userDataService.findAllUsers();
    }
}