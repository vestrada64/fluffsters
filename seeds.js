const Puppy = require('./models/Puppy');

require('./config/database');
require('dotenv').config();


Puppy.remove({})
.then(function() {
    return Puppy.create([
        {
            name: "Jack",
            breed: "Beagle",
            image_url: ("https://i.imgur.com/ZhvofrCs.jpg"),
            description: "Small and cute, but sassy."
        },
        {
            name: "Loki",
            breed: "Corgi",
            image_url: ("https://i.imgur.com/U2doY5Ps.jpg"),
            description: "A little Loaf."
        },
        {
            name: "Pelucha",
            breed: "Pomeranian",
            image_url: ("https://i.imgur.com/R0hfnCps.png"),
            description: "Full of Love.",
        },
        {
            name: "Teddy",
            breed: "Shiba Inu",
            image_url: ("https://i.imgur.com/26EefyRs.jpg"),
            description: "Your Personal TeddyBear"
        }
    ])
})

.then(function(puppies) {
    console.log(puppies);
    process.exit();
})