require('dotenv').config()

const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
//const router = require('./routes/index')
//const webPush = require('./webpush')


// web-push config
const webPush = require('web-push')

webPush.setVapidDetails(
    'mailto:lucmagg2020@gmail.com', 
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
)



var router = express.Router()


// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Static Content
app.use(express.static(path.join(__dirname, '/public')))

// Routes

// this route subscribe the user
router.post('/subscription', async (req, res) => {
    pushSubscription = req.body
    res.status(200).json()
})


// this route send notification
router.post('/new-message', async (req, res) => {

    const { message } = req.body
    const payload = JSON.stringify({
        title: 'Ushuaia Tierra del fuego',
        message,
        requireInteraction:true
    })

    try {
        await webPush.sendNotification(pushSubscription, payload)  
    } catch (error) {
        console.log(error)
    } 
})





app.use(router)

app.listen(3010)
console.log('Server listening...')