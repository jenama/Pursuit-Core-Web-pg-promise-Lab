const express = require('express');

const db = require('../db.js') //connected db instance 

const router = express.Router();

router.get('/', async (req, res) => {

    //ES5 METHOD OF DEALING WITH PROMISES 
    // db.any('SELECT * FROM users')
    //     .then(rows => {
    //         res.json(rows)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    try {
        let users = await db.any('SELECT * FROM users')
        res.json({
               
            payload: users,
            message: 'Success, retrieved all the users'
        })
    } catch (error) {
        res.json({
            message: "Error. Something went wrong"
        })
    }
})

router.post('/register', async (req, res) => {
    //firstname, lastname, age
    console.log(req.body)

    try {
        let insertQuery = `
        INSERT INTO users(firstname, lastname, age)
         VALUES($1, $2, $3)`

        await db.none(insertQuery, [req.body.firstname, req.body.lastname, req.body.age])
        res.json({
            payload: req.body,
            message: 'POST request arrives at /users/register'

        })
    } catch (error) {
        res.json({
            message: "There was an error registering the user"
        })
    }
})

module.exports = router;