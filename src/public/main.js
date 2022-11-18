
/* FRONT-END */
const PUBLIC_VAPID_KEY = 'BANvqEUgcNLdhOgJhvswTLpRHu9GCMzkNP2CPwmFBHeGsAv42OaCyT-40IUUaAMTHFJYBUZLw2AWb_vb1WrG_68'

const createSubscription = async () => {

    // create Service Worker
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })
    console.log('new Service Worker')

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: PUBLIC_VAPID_KEY
    })

    await fetch('/subscription', {
        method: 'POST',
        body: JSON.stringify(subscription), // sent subscription object to the server
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log('Subscribed!')  
}


// formulario
const form = document.querySelector('#myform')
const message = document.querySelector('#message')


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch('/new-message', {
        method: 'POST',
        body: JSON.stringify({
            message: message.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
})



createSubscription()