const webPush = require('web-push')

//console.log(process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)


webPush.setVapidDetails(
    'mailto:lucmagg2020@gmail.com', 
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
)


module.export = webPush