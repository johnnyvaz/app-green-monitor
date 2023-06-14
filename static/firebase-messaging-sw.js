
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.2/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.2/firebase-messaging-compat.js'
)
firebase.initializeApp({"apiKey":"AIzaSyCVPQoH_cqtwbCmJv2pyo9VxJBmbMwOjg0","authDomain":"site-dandaro.firebaseapp.com","projectId":"site-dandaro","storageBucket":"site-dandaro.appspot.com","messagingSenderId":"102265851373","appId":"1:102265851373:web:a76dcbc29d3216de6d6be4","measurementId":"G-EMR2YD2TV6"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"goToLupasGithub","url":"https:\u002F\u002Fgithub.com\u002Flupas"},{"action":"goToModuleGithub","url":"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Ffirebase-module"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
