# Code base for Project P12 - Parcours Front-end - React
I work in SportSee, a startup dedicated to sport coaching. The company is about to launch a new release of the user profile page. This page will allow the user to follow up several metrics, among them calories, glucids, lipids, the activity performed and the sessions duration average.
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
### `npm install` to install the backend
### `npm start` to run the backend
Message 'magic happens on port 3000' indicates the backend has successfully started on port 3000

## Frontend
clone this repo https://github.com/MenAllen/PhilippeJoubard_P12_032022.git
### `npm install` to install the frontend
### `npm start` to run the frontend
A message will warn you that port 3000 is already in use and asks if you want to use another one. Then type the key 'y' to accept. A browser window then opens so that you can access the app

## Configuration Mock ou API
Par défaut les données sont chargées à partir du fichier /src/data/mockedData.js.
Il est possible de modifier cette configuration pour récupérer les données via une API vers les endpoints donnés (fetch). Pour cela, il suffit de passer à false le boolean "mocked" dans la fonction useFetchData du fichier /src/utils/api.jsx