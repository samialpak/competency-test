package com.scrumconnect.api.data.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.scrumconnect.api.data.model.UserData;

@Repository
public interface UserDataRepository extends MongoRepository<UserData, String> { 
	UserData findByName(String name);
}