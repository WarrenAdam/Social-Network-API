// Importing the User and Thought models from their respective files
const Users = require('./Users');
const Thought = require('./Thought');
// Exporting the User and Thought models as a single module for easy access in other parts of the application
module.exports = {Thought, Users};