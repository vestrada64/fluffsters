const Puppy = require('./models/Puppy');

require('dotenv').config();
require('./config/database');

Puppy.remove({})
.then(function() {
    return Puppy.create([
        {
            name: "Jack",
            breed: "Beagle",
            image_url: "https://i.imgur.com/ZhvofrCm.jpg",
            description: "Small and cute, but sassy."
        },
        {
            name: "Loki",
            breed: "Corgi",
            image_url: "https://i.imgur.com/U2doY5Pm.jpg",
            description: "A little Loaf."
        },
        {
            name: "Pelucha",
            breed: "Pomeranian",
            image_url: "https://i.imgur.com/R0hfnCpm.png",
            description: "Full of Love.",
        },
        {
            name: "Teddy",
            breed: "Shiba Inu",
            image_url: "https://i.imgur.com/26EefyRm.jpg",
            description: "Your Personal TeddyBear"
        }
    ])
})
.then(function(puppies) {
    console.log(puppies);
    process.exit();
})
.catch(function(err) {
    console.log(`seed failed because of ${err}`)
})