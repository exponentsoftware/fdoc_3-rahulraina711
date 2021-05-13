const DB = require("./database");
let products = [...DB.products];
const math = require('mathjs');

const loggedInUser ={
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    createdAt:'17/05/2019 9:00 AM',
    isLoggedIn: true
};

const rateProduct = (productId, rate) => {
    let prod = products.find(product=> product._id===productId);
    prod.ratings.push({
        userId: loggedInUser._id,
        rate
    });

    console.log(prod);

    //avg ratings
    let totalRate = 0;

    for (x of prod.ratings){
        totalRate += x.rate;
    }

    let avgrate = math.median(totalRate-rate, rate);
    
    return `Avg rating = ${avgrate}`;
    
};

console.log(rateProduct("eedfcf", 4));