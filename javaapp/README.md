# 'javaapp' Java - Spring Boot project details

This project is a Java Spring-Boot project. `java 11`, `spring-boot 2.5.2`, `gradle 7.1.1` and `spring-boot-starter-data-mongodb` are used in this project. 

`mongodb atlas` is used as database. This database is on the cloud. If you want to see details of `mongodb cloud uri` and `database`, you can check `src/main/resources/application.properties` file. In the mongodb, we are using `nodetest` database and `userdata` collection.

When you run this project as java application, project will be open on port `8080`.

## Available paths

This app has basically 2 paths:

### `/user`

This path is used for saving the user to database.

When you call the `/user` path with `post` method type, user will save to the database. 

Before the saving, parameters will be validated. If an error on validating, return `ValidationException` as a response.
While saving, if there is a user with the same name in the database, the process is interrupted with `UserAlreadyExistException`.

Details for this path, you can see `src/main/java/com.scrumconnect.api.controller/UserDataCommandController.js`.

### `/user/all`

This path is used for getting all users which were saved to database.

When you call the `/user/all` path with `get` method type, all users are returned as response.
If users list is empty, the process is interrupted with `UsersNotFoundException`.

Details for this path, you can see `src/main/java/com.scrumconnect.api.controller/UserDataQueryController.js`.

## Available Scripts

In the project directory, you can run:

### `./gradlew build --refresh-dependencies`

With this command you can install and refresh all dependency for the project. You should run this command before other commands.

### `./gradlew bootRun`

Runs the app with `gradle`.
App is opened on [http://localhost:8080](http://localhost:8080).

### `./gradlew test`

Run the tests with `spring-boot-starter-test`. Tests are in `src/test/java/com.scrumconnect.api.controller/` folder. Details for tests, you can see files in this folder.
After successfully ending this script, for the test results you can see `{JAVAAPP_HOME_PATH}\build\reports\tests\test\index.html`

NOTE: In Ubuntu/Linux, you should add `bash` command to start of the `gradlew` commands. For example: `bash ./gradlew build --refresh-dependencies`.


