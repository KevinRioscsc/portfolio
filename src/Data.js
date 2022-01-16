import project from './Components/Images/smart-brain.png'
import Frend from './Components/Images/Frend2.png'
import Funky from './Components/Images/Funky.png'

export const project1 = {
    projectName: 'Frend',
    projectDesc : "Frend is a social media music sharing app that uses the spotify API to search for your favorite songs to post on the global newsfeed. Everybody could see what songs you recommend along with a little description of what the song makes you feel. The Login and Register feature uses Firebase Auth and post and likes are stored in a postgres database",
    projectImg : Frend,
    projectLive: 'https://frend-app.herokuapp.com',
    projectSource: ''

}

export const project2 = {
    projectName: 'Smart Brain',
    projectDesc : "SmartBrain is an app that combines React, Node.js, Express, PostgreSQL, and the Clarifai API to create an awesome face recognition app! You could upload a photo to the app and it'll detect a face on the photo. The app tracks the amount of time user has uploaded and used the app. ",
    projectImg : project,
    projectLive: 'https://smart-brain-kevin.herokuapp.com',
    projectSource: ''

}
export const project3 = {
    projectName: 'Funky Bots',
    projectDesc : "Funky Bots is a React App that focuses mainly on API usage. I used the robohash API to fill the website with users. Each user gets their own card with their information when clicked and users could search up their favorite robots",
    projectImg : Funky,
    projectLive: 'https://kevinrioscsc.github.io/FunkyBots/',
    projectSource: 'https://github.com/KevinRioscsc/FunkyBots'

}