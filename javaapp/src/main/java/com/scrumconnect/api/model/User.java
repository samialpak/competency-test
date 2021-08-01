package com.scrumconnect.api.model;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class User {

	@NotEmpty(message = "Name is mandatory")
	private String name;

	@NotEmpty(message = "Sex is mandatory")
	private String sex;

	@NotNull(message = "Age is mandatory")
	@Min(value=0, message = "Age must be greater than 0")
	private Integer age;

	//@NotEmpty(message = "Country is mandatory")
	//@Size(min=3, max=3, message = "The length of the country value must be 3")
	private String country;

	private User() {

	}

	public User(String name, String sex, Integer age, String country) {
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.country = country;
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
