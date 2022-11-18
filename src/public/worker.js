console.log('Service Worker Ushuaia')


self.addEventListener('push', evt => {
    const data = evt.data.json()
    console.log(data)
    
    
    self.registration.showNotification(data.title, {
        body: data.message
    })



})