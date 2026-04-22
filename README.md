// This is the markdown Documentation //

# Bug Tracking System

## Overview
The Bug Tracking System is a web based app that allows users to track, assign and manage software bugs and issues accross different projects. 

## How To Run
 - Step 1
 Clone the repository from Github

 -Step 2 
 Navigate into the project folder
 
 - Step 3
 Open the index.html file in your browser

 No installations or server required. The app runs entirely in the browser.

## Features of the app
- Create and manage people
- Create and manage projects 
- Create issues/tickets  with full details
- Assign issues to people, including delayed assignment
- View all issues in a structured dashboard
- View a single issue with all its details
- Edit and update existing issues
- Data persists across sessions using localStorage 
- Profile pictures for people
- Filter issues by project

## Data Storage 

This application uses the web storage API to persist data accross browser sessions. No backend or database is required.

people - A list of all people/ users in the system
projects - A list of all projects
bugs - A list of all issues/ tickets

Project Structure
|
|---- index.html # Main entry point
|-- styles.css # Custom styles
|-- data.js # localStorage helper functions and seed data
|-- app.js # Main application logic
|--README.md # Project documentation




## Team 

Zanay Williams - Data Layer, People & Project Management
M-Jay Williams - Issue Creation & Assignment
David- Views and Editing
Sebestian - Integration, Testing & Presentation 