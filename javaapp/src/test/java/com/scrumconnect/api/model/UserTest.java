package com.scrumconnect.api.model;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNotSame;

import org.junit.jupiter.api.Test;

public class UserTest {
    @Test
    public void shouldAssignFieldsWhenCreated() {
    	User userDataTestClass = new User("John Smith", "male", 23, "GBR");

        assertNotNull(userDataTestClass.getName());
        assertNotNull(userDataTestClass.getSex());
        assertNotNull(userDataTestClass.getAge());
        assertNotNull(userDataTestClass.getCountry());
    }
    
    @Test
    public void shouldAssignAndRightFieldsWhenCreated() {
    	User userDataTestClass = new User("John Smith", "male", 23, "GBR");

        assertEquals(userDataTestClass.getName(), "John Smith" );
        assertEquals(userDataTestClass.getSex(), "male");
        assertEquals(userDataTestClass.getAge(), 23);
        assertEquals(userDataTestClass.getCountry(), "GBR");
    }

    @Test
    public void shouldBeDifferent() {
    	User userDataTestClass1 = new User("John Smith", "male", 23, "GBR");
    	User userDataTestClass2 = new User("John Smith", "male", 23, "GBR");

        assertNotSame(userDataTestClass1, userDataTestClass2);
    }
}
