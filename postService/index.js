const express= require('express')
const app = express()
const {randomBytes} = require('crypto')
const cors = require('cors')
const posts = {}
app.use(express.json())
app.use(cors())
app.get('/posts',(req,res)=>{
    res.send(posts)


})
app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex')
    const {title} = req.body
    posts[id] = {
        id,title
    }

    res.status(201).send(posts[id])
    console.log('posts',posts)
})
app.listen(4000,()=>{
    console.log('listening on 4000')
}
)
