const mongoose = require('mongoose')
const db = require('./Post.js')

// const Post = require("./Post.js")

const seedData = 
[
    {
        user: 'David Robles',
        body: 'Had a great time at the beach',
        image: 'https://imgur.com/U8Zp43f',
        location: 'Bali, Indonesia',
        avatar: 'https://i.imgur.com/d9Moz33.jpg'
    },
    {   user: 'Victoria Vela',
        body: 'That was such an awesome hike!',
        image: 'https://i.imgur.com/gJZu9kY.jpg',
        location: 'Bryce Canyon, UT',
        avatar: 'https://i.imgur.com/2TlPHnT.png?1'
    },
    {
        user: 'Ben Baker',
        body: 'Wow, what a view!',
        image: 'https://i.imgur.com/FcggF7V.jpg',
        location: 'Denver, CO',
        avatar: 'https://i.imgur.com/FczAyur.png'
    },
    {   user: 'Lives4Nature',
        body: 'This is awesome!',
        image: 'https://i.imgur.com/lLIeAtq.jpg',
        location: 'Grand Canyon, AZ',
        avatar: 'https://i.imgur.com/jKKgbfe.png?2'
    },
    {   
        user: 'In2Water',
        body: 'Living my best life!',
        image: 'https://i.imgur.com/jqFU1t2.jpg',
        location: 'Crete, Greece',
        avatar: 'https://i.imgur.com/nFYfcBs.png?2'
    },
    {   
        user: 'Travels4Life',
        body: 'Had an amazing time soaking in the sun!',
        image: 'https://i.imgur.com/fnfbuB5.jpg',
        location: 'Clearwater Beach, FL',
        avatar: 'https://i.imgur.com/jKKgbfe.png?2'
    },
    {   
        user: 'NatureisMyLife',
        body: 'It doesn\'t get better than that view',
        image: 'https://i.imgur.com/j0s7HZV.jpg',
        location: 'Glacier National Park, MT',
        avatar: 'https://i.imgur.com/2TlPHnT.png?1'
    },
    {   
        user: 'DreamsofLandscapes',
        body: 'Had an amazing time in hiking in these woods!',
        image: 'https://i.imgur.com/DRnUQnh.jpg',
        location: 'Redwood National Park, CA',
        avatar: 'https://i.imgur.com/nFYfcBs.png?2'
    },
    {   
        user: 'Lives4theSea',
        body: 'We had an amazing weekend at this gem!',
        image: 'https://i.imgur.com/5cfJDPK.jpg',
        location: 'Huntington Beach, CA',
        avatar: 'https://i.imgur.com/jKKgbfe.png?2'
    },
    {   
        user: 'WannabeinNature',
        body: 'What an amazing weekend!',
        image: 'https://i.imgur.com/QfbgRnS.jpg',
        location: 'Dublin, Ireland',
        avatar: 'https://i.imgur.com/nFYfcBs.png?2'
    },
    {   
        user: 'Nature4Life',
        body: 'Had an amazing time hiking today!',
        image: 'https://i.imgur.com/oAbGR0K.jpg',
        location: 'Boulder, CO',
        avatar: 'https://i.imgur.com/2TlPHnT.png?1'
    },
    {   
        user: 'NaturalAdventurer',
        body: 'The most beautiful sunset ever!',
        image: 'https://i.imgur.com/MhXDawx.jpg',
        location: 'Santorini, Greece',
        avatar: 'https://i.imgur.com/jKKgbfe.png?2'
    },
    {   
        user: 'Adventure4Life',
        body:'Such an amazing trip. Can\'t wait to go back',
        image: 'https://i.imgur.com/qKQSgtb.jpg',
        location: 'Mali, Maldives',
        avatar: 'https://i.imgur.com/nFYfcBs.png?2'
    },
    {   
        user: 'IHeartTravel',
        body: 'What a great place to go with the family!',
        image: 'https://i.imgur.com/VNNbQ5b.jpg',
        location: 'Tampa, FL',
        avatar: 'https://i.imgur.com/2TlPHnT.png?1'
    },
    {   
        user: 'WannaTravelMore',
        body: 'Wow! What an amazing trip we had this summer. Such a beautiful hike! Cannot wait to go back!',
        image: 'https://i.imgur.com/jOlUaSs.jpg',
        location: 'Denver, CO',
        avatar: 'https://i.imgur.com/FczAyur.png'
    },
    {   
        user: 'Travels2Much',
        body: 'I loved it. Such an amazing travel destination. So much to do!',
        image: 'https://i.imgur.com/qAqm6fR.jpg',
        location: 'Madrid, Spain', 
        avatar: 'https://i.imgur.com/jKKgbfe.png?2'
    },
    {   
        user: 'Can\'tStopTravelling',
        body: 'Wow! What an amazing place!',
        image: 'https://i.imgur.com/XcTMyeQ.jpg',
        location: 'Big Island, Hawaii',
        avatar: 'https://i.imgur.com/nFYfcBs.png?2'
    },
    {   
        user: '2MuchAdventure',
        body: 'Half a day in the sun. No regrets.',
        image: 'https://i.imgur.com/nEXzIvM.jpg',
        location: 'Arches National Park, UT',
        avatar: 'https://i.imgur.com/2TlPHnT.png?1',
    },
]

const userData = [
    {
    email: 'dRobles@gmail.com',
    password: 'David',
    username: 'David Robles',
    avatar: 'https://i.imgur.com/d9Moz33.jpg',
    },
    {
    email: 'vVela@gmail.com',
    password: 'Victoria',
    username: 'Victoria Vela',
    avatar: 'https://i.imgur.com/2TlPHnT.png?1',
    },
    {
    email: 'bBaker@gmail.com',
    password: 'Ben',
    username: 'Ben Baker',
    avatar: 'https://i.imgur.com/FczAyur.png',
    },
    {
    email: 'nature@gmail.com',
    password: 'nature',
    username: 'Lives4Nature',
    avatar: 'https://i.imgur.com/jKKgbfe.png?2',
    },
    {
    email: 'water@gmail.com',
    password: 'water',
    username: 'In2Water',
    avatar: 'https://i.imgur.com/nFYfcBs.png?2',
    },
    {
    email: 'travel@gmail.com',
    password: 'travel',
    username: 'Travels4Life',
    avatar: 'https://i.imgur.com/jKKgbfe.png?2',
    },
    {
    email: 'nature93@gmail.com',
    password: 'nature',
    username: 'NatureisMyLife',
    avatar: 'https://i.imgur.com/2TlPHnT.png?1',
    },
    {
    email: 'dreams@gmail.com',
    password: 'dreams',
    username: 'DreamsofLandscapes',
    avatar: 'https://i.imgur.com/nFYfcBs.png?2',
    },
    {
    email: 'live@gmail.com',
    password: 'live',
    username: 'Lives4theSea',
    avatar: 'https://i.imgur.com/jKKgbfe.png?2',
    },
    {
    email: 'natural@gmail.com',
    password: 'natural',
    username: 'WannabeinNature',
    avatar: 'https://i.imgur.com/nFYfcBs.png?2',
    },
{
    email: 'life4@gmail.com',
    password: 'life4',
    username: 'Nature4Life',
    avatar: 'https://i.imgur.com/2TlPHnT.png?1',
    },
    {
    email: 'adventurer01@gmail.com',
    password: 'adventurer01',
    username: 'NaturalAdventurer',
    avatar: 'https://i.imgur.com/jKKgbfe.png?2',
    },
    {
    email: 'travels005@gmail.com',
    password: 'travels005',
    username: 'Adventure4Life',
    avatar: 'https://i.imgur.com/nFYfcBs.png?2',
    },
    {
    email: 'hearstravel01@gmail.com',
    password: 'travellingisthebest',
    username: 'IHeartTravel',
    avatar: 'https://i.imgur.com/2TlPHnT.png?1',
    },
    {
    email: 'travelforever@gmail.com',
    password: 'travelforever',
    username: 'WannaTravelMore',
    avatar: 'https://i.imgur.com/FczAyur.png',
    },
    {
    email: 'travels2much@gmail.com',
    password: 'travel008',
    username: 'Travels2Much',
    avatar: 'https://i.imgur.com/jKKgbfe.png?2',
    },
    {
    email: 'cooltraveller37@gmail.com',
    password: 'traveller37',
    username: 'Can\'tStopTravelling',
    avatar: 'https://i.imgur.com/nFYfcBs.png?2',
    },
    {
    email: 'muchadventure22@gmail.com',
    password: 'adventure144',
    username: '2MuchAdventure',
    avatar: 'https://i.imgur.com/2TlPHnT.png?1',
    }, 

]

module.exports = userData