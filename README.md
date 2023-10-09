# Social-Network-API

## Description
In this activity, we created a Node.js application programming interface (API) that allows users to perform CRUD operations on social networking data models using a NoSQL database. The data models include friends, users, thoughts, and reaction data models, and they can be retrieved by ID or all of them. This API is built using Node.js and Mongoose, which makes it easy to keep track of dynamic data models and databases.
## Overview
The following was adpated from the Module 18 coding bootcamp portal:

## User Story:
AS A social media startup <br>
I WANT an API for my social network that uses a NoSQL database <br>
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria:
GIVEN a social network API<br>
WHEN I enter the command to invoke the application<br>
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Table of Contents
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)

Installation
To complete teh installation, run npm init to intiallize package.json. Next add the dependecies that are required and are outlined in the module 18 challenge.

Usage
Walkthrough video:

https://watch.screencastify.com/v/T5KyARTkZAvFdx2LcckC

Screenshots:
![alt text](./assets/post%20thought.png) 


Credits
To better understand Mongoose , I watched the following video: https://www.youtube.com/watch?v=DZBGEVgL2eE

