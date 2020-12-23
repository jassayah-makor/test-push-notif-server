const admin = require('firebase-admin')
require('dotenv').config()

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  })
})

var message = {
  notification: {
    title: 'Test',
  },
  android: {
    direct_boot_ok: true,
    notification: {
      click_action: '.activity.MainActivity'
    }
  },
  data: {
    Answer: '32',
    'Option 1': '32',
    'Option 2': '33',
    'Option 3': '34',
    deviceId: 'eJFlz9DDSc2Uc1mf0SUDQ5:APA91bF777YLh-ui9T35qqDpS3IER-i1wFFnfAYkWOqP3irRvv9y_F3nwAzWJk2CmT8Lf--uNzPCoN5CqawFWbzqJbxXA39nrvvetfgEef1Jb48pqbLqyMKqjPCIz9aS5-OLbsXnYmc7',
    message: 'Please type on the correct answer in order to register your account.'
  },
  token: 'eJFlz9DDSc2Uc1mf0SUDQ5:APA91bF777YLh-ui9T35qqDpS3IER-i1wFFnfAYkWOqP3irRvv9y_F3nwAzWJk2CmT8Lf--uNzPCoN5CqawFWbzqJbxXA39nrvvetfgEef1Jb48pqbLqyMKqjPCIz9aS5-OLbsXnYmc7',
}

admin.messaging().send(message)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
