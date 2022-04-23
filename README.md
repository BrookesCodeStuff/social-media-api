# Social Media API

## Description

The purpose of this project was to build an API using a NoSQL solution in order to better under the data structure. Users can create accounts, then post their thoughts and add friends to their friends' lists. Other users can view those posted thoughts and share their reactions. 

## Technologies Used
* [NodeJS](https://nodejs.org/) and [Express](https://expressjs.com/) for the server backend
* [MongoDB](https://www.mongodb.com/) for the NoSQL database
* [Mongoose](https://mongoosejs.com/) used for data modeling

## Usage
To test the API, clone or download this repository. In your terminal of choice, browse to the application folder and install dependencies with `npm install`, and then start the server with `npm start`. 

In your favorite API platform (I like [Postman](https://www.postman.com/)), test the routes. `http://localhost:3001/api/`

### Users
User routes can be tested at `http://localhost:3001/api/users`

USER FIELDS:
* `username`
* `email`

### Friends
Friend routes can be tested at `http://localhost:3001/api/users/:userId/friends/:friendId`

### Thoughts
Thought routes can be tested at `http://localhost:3001/api/thoughts`

THOUGHT FIELDS:
* `thoughtText`
* `username`

### Reactions
Reactions can be tested at `http://localhost:3001/api/thoughts/:thoughtId/reactions`

REACTION FIELDS:
* `reactionBody`
* `username`

## Walkthrough Video