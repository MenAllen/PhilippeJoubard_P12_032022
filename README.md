# Code base for Project P12 - React
SportSee is a startup dedicated to sport coaching. The company is about to launch a new release of the user profile page. This page will allow the user to follow up several metrics, among them calories, glucids, lipids, the activity performed and the sessions duration average.
I am in charge of this new page design 

## Inputs
 - FIGMA models for Desktop et Mobile
 - UserStories Kanban

## Software tools used
 - Visual Studio Code V1.71
 - Node V14.17
 - React Create App
 - HTML, CSS, Javascript
 - React V1.8 (Router V6.3)
 - Recharts V2.1
 - ESlint Linter
 - Prettier Code formater
 - Styled-Components
 - P42 code analyser


# Getting Started with SportSee App

This project needs backend and frontend apps.

## Backend
clone this repo https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
### `npm install` 
to install the backend
### `npm start`
to run the backend. Message 'magic happens on port 3000' indicates the backend has successfully started on port 3000

## Frontend
clone this repo https://github.com/MenAllen/PhilippeJoubard_P12_032022.git
### `npm install`
to install the frontend
### `npm start`
to run the frontend. A message will warn you that port 3000 is already in use and asks if you want to use another one. Then type the key 'y' to accept. A browser window then opens so that you can access the app

## JS Doc
Once the frontend is installed, jsdoc can be generated:
### `npm run jsdoc` 
will generate the files in jsdoc directory
### use index.html
It will display the result

## MOCK / API Configuration switch
A boolean named 'MOCKED_DATA' is defined in /src/utils/api.jsx. If set to true, mocked data is chosen, if set to false, API data is chosen. Note the current value is displayed in Home page.