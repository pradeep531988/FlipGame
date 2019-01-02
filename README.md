This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Steps to deploy server side
Copy the flipkartgame_server_side and paste it to workspace and run below commands
1. mvn clean install
2. mvn build
3. mvn spring-boot:run
App should run on 8080 port

## Steps to deloy react-app
Copy the flipkartgame_react_frontend and paste it to workspace and run below commands
1. npm install
2. npm start
App should start on 3000 port
Note: Make sure backed is running before starting react front end app