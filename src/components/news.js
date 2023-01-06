const News =[
    {id:"1", 
    img:require("../image/LongCovid.png"), 
    head:"Understanding Long Covid",
    title:"We know more now than before, and it’s still alarming" ,
    isTrending : false, 
    category:"", 
    date:"Dec 19, 2022",
    key:"Long Covid",
    read:"9 min read",
    createdUser:{ Name:"Dr. Tom Frieden", userId:"1", img:require('../image/profile.png')} 
    },
    {id:"2", 
    img:require("../image/LongCovid.png"), 
    head:"Braiding Past into Future",
    title:"Nican Huehcatlahtolli, a New Futurism", 
    date:"Nov 25, 2022", 
    isTrending : true, 
    category:"", 
    key:"Futurism",
    read:"11 min read",
    createdUser:{ Name:"David Bowles", userId:"2", img:require('../image/profile.png')} 
    },
    {id:"3", 
    img:require("../image/LongCovid.png"), 
    head:"Learning to Cope with Estrangement: When Children “Cancel” Their Parents",
    title:"An estranged father reflects on the stigma and surprising prevalence of these family rifts.", 
    date:"Aug 21, 2022", 
    isTrending : true, 
    category:"", 
    key:"Parental Alienation",
    read:"6 min read",
    createdUser:{ Name:"Ed Erginziger", userId:"3", img:require('../image/profile.png')} 
    },
    {id:"4", 
    img:require("../image/LongCovid.png"), 
    head:"ChatGPT Is Having a Thomas Edison Moment",
    title:"Why breakthrough technologies need to be accessible", 
    date:"Dec  8, 2022", 
    isTrending : false, 
    category:"", 
    key:"Gpt 3",
    read:"4 min read",
    createdUser:{ Name:"Thomas Smith", userId:"4", img:require('../image/profile.png')} 
    },
    {id:"5", 
    img:require("../image/LongCovid.png"), 
    head:" Spotify’s Year-End Lists Are the Ultimate Personality Test",
    title:"Why the mass sharing of the music streaming service’s year-end lists is uniquely telling", 
    date:"Dec 6, 2022", 
    isTrending : false, 
    category:"", 
    key:"Music",
    read:"3 min read",
    createdUser:{ Name:"Allegra Hobbs", userId:"5", img:require('../image/profile.png')} 
    }
] 
    export default News;