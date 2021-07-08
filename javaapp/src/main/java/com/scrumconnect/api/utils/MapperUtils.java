package com.scrumconnect.api.utils;

import com.scrumconnect.api.data.model.UserData;
import com.scrumconnect.api.model.User;

public class MapperUtils {

	public static UserData mapUserToUserData(User user) {
		return new UserData(user.getName(), user.getSex(), user.getAge(), user.getCountry());
	}
}
