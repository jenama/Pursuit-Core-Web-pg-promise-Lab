const express = require('express')

const db = require('../db.js')

const router = express.Router();

router.get('/', async(req, res) => {
    console.log("db", db)
    try {
        let posts = await db.any('SELECT * FROM posts')
        console.log('posts', posts)
        res.json({
            payload: posts,
            message: 'Success, retrieved all the posts'
        })
    } catch (error) {
        res.json({
            message: "Error. Something went wrong"
        })
    }

})

router.get('/:user_id', async (req, res) => {
    try{
        let user_id = await db.any('SELECT * FROM posts WHERE poster_id = 1')
        res.json({
             payload: user_id,
             message: 'POST request arrives at user'

            })
    }catch (error){
         res.json({
             message: "There was an error adding the posts"
         })

    }
     

})

router.post('/register', async (req, res) => {

console.log("req.body", req.body.body)

try {
    let insertQuery = `
        INSERT INTO posts(poster_id, body)
         VALUES($1, $2)`

    await db.any(insertQuery, [req.body.poster_id, req.body.body])
    console.log('req.body', req.body)
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