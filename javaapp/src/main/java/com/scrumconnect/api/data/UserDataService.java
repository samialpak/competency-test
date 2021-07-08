package com.scrumconnect.api.data;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scrumconnect.api.data.model.UserData;
import com.scrumconnect.api.data.repository.UserDataRepository;
import com.scrumconnect.api.exception.UserAlreadyExistException;
import com.scrumconnect.api.exception.UsersNotFoundException;

@Service
public class UserDataService {
	
	private final UserDataRepository userRepo;

	@Autowired
	public UserDataService(UserDataRepository repo) {
		this.userRepo = repo;
	}

    public List<UserData> findAllUsers() {
    	
    	if(this.userRepo.findAll().isEmpty()) {
    		throw new UsersNotFoundException("Users list is empty");
		} else {
			return this.userRepo.findAll();
		}
    }
    
    public UserData saveUser(UserData user) {
    	
    	if(this.userRepo.findByName(user.getName()) != null) {
    		throw new UserAlreadyExistException("User Already Exist");
		} else {
			return this.userRepo.save(user);
		}
    }
}
