package com.scrumconnect.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.scrumconnect.api.data.UserDataService;
import com.scrumconnect.api.data.model.UserData;
import com.scrumconnect.api.model.User;
import com.scrumconnect.api.utils.MapperUtils;

@RestController
@RequestMapping("/user")
public class UserDataCommandController {
	
    private UserDataService userDataService;

    @Autowired
    public UserDataCommandController(UserDataService userDataService) {
        this.userDataService = userDataService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserData saveUser(@Valid @RequestBody User user) {    	
    	return this.userDataService.saveUser(MapperUtils.mapUserToUserData(user));
    }
}