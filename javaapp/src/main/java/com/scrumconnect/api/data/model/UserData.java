package com.scrumconnect.api.data.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "userdata")
public class UserData {
	
	@Id
	private String id;
	
	@Field
	private String name;

	@Field
	private String sex;
	
	@Field
	private Integer age;	
	
	@Field
	private String country;
	
	private UserData() {
		
    }
	
	public UserData(String name, String sex, Integer age, String country) {
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.country = country;
	}
	
	public String getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getSex() {
		return this.sex;
	}
	
	public Integer getAge() {
		return this.age;
	}
	
	public String getCountry() {
		return this.country;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public void setCountry(String country) {
		this.country = country;
	}	
}