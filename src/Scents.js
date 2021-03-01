const Scents = [
    {
        name: 'Breathe',
        color: 'rgb(134,134,100)',
        logoURL: 'images/breathe.png',
        imageURLs: ['images/breathe1.jpg','images/breathe2.png','images/breathe3.png','images/breathe4.png'],
        description: "The scent was inspired by the popular 'Bath & Body Works' candle 'Eucalyptus and Spearmint'. I bought this candle on my trip to New York 9 years ago, and I've been completely obsessed."
    },
    {
        name: 'His Cologne',
        color: 'rgb(141,124,194)',
        logoURL: 'images/hisCologne.png',
        imageURLs: ['images/hisCologne1.jpg','images/hisCologne2.png','images/hisCologne3.png','images/hisCologne4.png','images/hisCologne5.png','images/hisCologne6.png'],
        description: "Do you ever catch yourself sniffing your man because he's wearing one of his sexy colognes and he smells absolutely amazing? Cos I do! All the time! Men's colognes are just *sniffs* so sexy! Now your whole house can smell like his cologne!"
    },
    {
        name: 'Fresh Laundry',
        color: 'rgb(224,102,104)',
        logoURL: 'images/freshLaundry.png',
        imageURLs: ['images/freshLaundry1.jpg','images/freshLaundry2.png','images/freshLaundry3.png','images/freshLaundry4.png','images/freshLaundry5.png','images/freshLaundry5.png'],
        description: "That feeling when you have fresh laundry and then everything just feels and smells amazing! It's not too overpowering but perfect enough to give off an amazingly warm, clean scent."
    },
    {
        name: 'Cocoa Butter Baby',
        color: 'rgb(150,128,105)',
        logoURL: 'images/cocoaButterBaby.png',
        imageURLs: ['images/cocoaButterBaby1.jpg','images/cocoaButterBaby2.png','images/cocoaButterBaby3.png','images/cocoaButterBaby4.png','images/cocoaButterBaby5.png','images/cocoaButterBaby6.png'],
        description: "Cocoa Butter Baby - Who doesn't love the smell of cocoa butter? Cocoa Butter fragrance oil releases rich and sweet, dark chocolate-like aromas, reminiscent of cocoa butter. Rich, warm and sweet. Perfect melt to create a cosy and warm environment."
    },
    {
        name: 'Cosy Home',
        color: 'rgb(70,128,130)',
        logoURL: 'images/cosyHome.png',
        imageURLs: ['images/cosyHome1.jpg','images/cosyHome2.png','images/cosyHome3.png','images/cosyHome4.png','images/cosyHome5.png'],
        description: "In the words of Teddy Pendergrass... 'Turn down the lights and light a candle'. Put on your jim-jams, grab your favourite blanket and get nice and cosy!"
    },
    {
        name: 'Date Night',
        color: 'rgb(65,47,107)',
        logoURL: 'images/dateNight.png',
        imageURLs: ['images/dateNight1.jpg','images/dreams1.png','images/dreams2.png','images/dreams3.png'],
        description: "Glossier polaroid meh copper mug woke enamel pin austin tote bag lumbersexual man braid trust fund kombucha. Bushwick try-hard beard church-key, etsy humblebrag ethical sriracha gentrify man bun jean shorts plaid VHS."
    },
    {
        name: 'Dove',
        color: 'rgb(238,238,238)',
        logoURL: 'images/dove.png',
        imageURLs: ['images/dreams1.png','images/dreams2.png','images/dreams3.png'],
        description: "Biodiesel bitters irony, viral food truck you probably haven't heard of them four loko. Air plant asymmetrical snackwave skateboard stumptown literally cronut paleo. Pok pok sriracha thundercats blue bottle, subway tile 90's kinfolk bespoke meditation actually fixie messenger bag hoodie."
    },
    {
        name: 'Dreams',
        color: 'rgb(153,153,153)',
        logoURL: 'images/dreams.png',
        imageURLs: ['images/dreams1.png','images/dreams2.png','images/dreams3.png'],
        description: "This wax melt is called 'Dreams' because lately, I feel like my hopes & dreams are slowly coming true.. And if my dreams can come true.. so can yours! A big thank you to Jasmine from Wireology who designed my 'DREAMS' wire piece! This melt has a shimmer once it's all melted. The scent is similar to fabric conditioner."
    },
    {
        name: 'Energy Cleanse',
        color: 'rgb(62,133,199)',
        logoURL: 'images/energyCleanse.png',
        imageURLs: ['images/energyCleanse1.png','images/energyCleanse2.png','images/energyCleanse3.png','images/energyCleanse4.png','images/energyCleanse5.png'],
        description: "Staying positive can be tough. Especially, when you are bombarded with a succession of negativity, failures, disappointment and heartbreaks. We need to cleanse our energy and bring new energy and positive affirmations into our lives. A positive mind comes from a heart full of faith. Say it with me now ...”I am enough... I can do it”"
    },
    {
        name: 'Mango Love',
        color: 'rgb(246,178,107)',
        logoURL: 'images/mangoLove.png',
        imageURLs: ['images/mangoLove1.png','images/mangoLove2.png','images/mangoLove3.png','images/mangoLove4.png'],
        description: "Exotic island mango, freshly sliced and mouth-watering. A scent so sweet and inviting that will make you fall in love with Mangos! (Inspired by the song 'Mango Love' by Shawn Wasabi)"
    },
    {
        name: 'Passion Fruit',
        color: 'rgb(151,17,16)',
        logoURL: 'images/passionFruit.png',
        imageURLs: ['images/passionFruit1.png','images/passionFruit2.png'],
        description: "If you like the scent of passion fruit then this is for you! This scent is so rich, fruity and sweet, it'll have you wanting to eat this melt."
    },
    {
        name: 'Spiritual Uplift',
        color: 'rgb(218,210,233)',
        logoURL: 'images/spiritualUplift.png',
        imageURLs: ['images/spiritualUplift.mp4','images/spiritualUplift1.png','images/spiritualUplift2.png','images/spiritualUplift3.png','images/spiritualUplift4.png','images/spiritualUplift5.png'],
        description: "Spiritual Uplift - Life is hard. And we always need uplifting Bible scriptures that will help us to grow and uplift our body, mind & soul."
    },
    {
        name: 'Sweet Nectar',
        color: 'rgb(227,121,144)',
        logoURL: 'images/sweetNectar.png',
        imageURLs: ['images/sweetNectar1.png','images/sweetNectar2.png','images/sweetNectar3.png'],
        description: "A sweet scent for those who love a delicious, warm sweet scent. The way this warms and radiates your room... simply amazing. A similar scent to fabric conditioner 'Heavenly Nectar'."
    },
    {
        name: 'White Sands',
        color: 'rgb(241,195,50)',
        logoURL: 'images/whiteSands.png',
        imageURLs: ['images/whiteSands1.png','images/whiteSands2.png','images/whiteSands3.png','images/whiteSands4.png'],
        description: "This scent reminds me of my favourite paradise beach in Ghana 'White Sands'. This scent screams Ghana. Sunshine. Icecream, fresh pineapple & oranges and beaches with White Sands - sounds like paradise! For those who have been to Ghana, it has a similar scent to the delicious drink 'Tampico' a sweet orange punch"
    },
    {
        name: 'Bora Bora',
        color: 'linear-gradient(to bottom, #eeb928, #f79d87)',
        logoURL: 'images/bora.png',
        imageURLs: ['images/bora1.png','images/bora2.png'],
        description: "Pack your bags, grab your passports and your sunglasses, because we are going to... BORA BORA! Let's escape to the exotic beaches with a tasty cocktail in our hands! what are you waiting for? Come on... LET'S GO!"
    },
]

export default Scents