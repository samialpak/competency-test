# Competency Test 

This repository includes 3 projects:
1. <b>'clientapp'</b>: This project is a <b>React</b> frontend project. This project has 2 pages. One of them is an input page which is used for getting user detail and save the database. Another page is used for giving the information when user was saved successfully to database. We used this project outputs which is created <u>build</u> script and bundled with <u>webpack</u>. For details, you can go to the 'clientap' [readme](./clientapp/README.md).

2. <b>'nodeapp'</b>: This project is a <b>nodejs</b> project. The project has <u>nunjucks, http-proxy, express, axios, config</u> packages. And this project has <u>clientapp\build</u> folder. In this folder, there are 3 files: <u>index.html, index.bundle.js, favicon.ico</u>. These files are copied from <u>clientapp</u> React frontend project. For details, you can go to the 'nodeapp' [readme](./nodeapp/README.md).

3. <b>'javaapp'</b>: This project is a Java Spring-Boot project. <u>java 11, spring-boot 2.5.2, gradle 7.1.1, spring-boot-starter-data-mongodb</u> are used in this project. <u>mongodb atlas</u> is used as database. For details, you can go to the 'javaapp' [readme](./javaapp/README.md).

For the flow you can see image at below:

![Alt text](./flow_scheme.jpg?raw=true "Competency Test Flow Scheme")


## Installation and run

For installation and run, you can follow steps at below:

1. Clone or download repository to your local computer.</br>

2. Prepare <b>clientapp</b> project.</br>
2.1. Install dependencies with <u>npm install</u> command.</br>
2.2. Build and create bundled files with <u>npm run build</u> command.</br>
2.3. See the outputs and copy this <u>build</u> folder to <u>clientapp</u> folder in <b>nodeapp</b> project. The current outputs of the <b>clientapp</b> project are copied under <b>nodeapp</b></br> 
2.4. If you want you can run this project with <u>npm start</u> command and see the page on <u>http://localhost:9000</u></br>

3. Prepare <b>javaapp</b> project.</br>
3.1. Install dependencies with <u>./gradlew build --refresh-dependencies</u> command</br>
3.2. Run the project with <u>./gradlew bootRun</u> command. Project started on <u>http://localhost:8080</u></br>
3.2. If you want you can see all users saved before with open <u>http://localhost:8080/user/all</u> on browser</br>

4. Prepare <b>nodeapp</b> project.</br>
4.1. Install dependencies with <u>npm install</u> command.</br>
4.2. Run the project with <u>npm start</u> command. Project started on <u>http://localhost:5000</u></br>

5. After all above steps, you can see all flow with opening the <u>http://localhost:5000</u> on browser.

NOTE: If you want you can see <b>all users saved before</b> with open <u>http://localhost:8080/user/all</u> or <u>http://localhost:5000/user/all</u> on browser</br>

