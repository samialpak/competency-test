# Competency Test 

This repository includes 3 projects:
1. <b>'clientapp'</b>: This project is a <b>React</b> frontend project. This project has 2 pages. One of them is an input page which is used for getting user detail and save the database. Another page is used for giving the information when user was saved successfully to database. We used this project outputs which is created <ins>build</ins> script and bundled with <ins>webpack</ins>. For details, you can go to the 'clientap' [readme](./clientapp/README.md).

2. <b>'nodeapp'</b>: This project is a <b>nodejs</b> project. The project has <ins>nunjucks, http-proxy, express, axios, config</ins> packages. And this project has <ins>clientapp\build</ins> folder. In this folder, there are 3 files: <ins>index.html, index.bundle.js, favicon.ico</ins>. These files are copied from <ins>clientapp</ins> React frontend project. For details, you can go to the 'nodeapp' [readme](./nodeapp/README.md).

3. <b>'javaapp'</b>: This project is a Java Spring-Boot project. <ins>java 11, spring-boot 2.5.2, gradle 7.1.1, spring-boot-starter-data-mongodb</ins> are used in this project. <ins>mongodb atlas</ins> is used as database. For details, you can go to the 'javaapp' [readme](./javaapp/README.md).

For the flow you can see image at below:

![Alt text](./flow_scheme.jpg?raw=true "Competency Test Flow Scheme")


## Installation and run

For installation and run, you can follow steps at below:

1. Clone or download repository to your local computer.</br>

2. Prepare <b>clientapp</b> project.</br>
2.1. Install dependencies with <ins>npm install</ins> command.</br>
2.2. Build and create bundled files with <ins>npm run build</ins> command.</br>
2.3. See the outputs and copy this <ins>build</ins> folder to <ins>clientapp</ins> folder in <b>nodeapp</b> project. The current outputs of the <b>clientapp</b> project are copied under <b>nodeapp</b></br> 
2.4. If you want you can run this project with <ins>npm start</ins> command and see the page on <ins>http://localhost:9000</ins></br>

3. Prepare <b>javaapp</b> project.</br>
3.1. Install dependencies with <ins>./gradlew build --refresh-dependencies</ins> command</br>
3.2. Run the project with <ins>./gradlew bootRun</ins> command. Project started on <ins>http://localhost:8080</ins></br>
3.2. If you want you can see all users saved before with open <ins>http://localhost:8080/user/all</ins> on browser</br>

4. Prepare <b>nodeapp</b> project.</br>
4.1. Install dependencies with <ins>npm install</ins> command.</br>
4.2. Run the project with <ins>npm start</ins> command. Project started on <ins>http://localhost:5000</ins></br>

5. After all above steps, you can see all flow with opening the <ins>http://localhost:5000</ins> on browser.

NOTE: If you want you can see <b>all users saved before</b> with open <ins>http://localhost:8080/user/all</ins> or <ins>http://localhost:5000/user/all</ins> on browser</br>

