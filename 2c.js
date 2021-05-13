const DB = require("./database");
let products = [...DB.products];

const loggedInUser ={
    _id: 'ab12ex',
    isLoggedIn: true
};

const likeProduct = (productId) => {
    let prod = products.find(product=> product._id===productId);
    if(prod.likes.includes(loggedInUser._id)){
        prod.likes.splice(prod.likes.indexOf(loggedInUser._id),1);
        return prod;
    };

    prod.likes.push(loggedInUser._id);

    return prod;
}

console.log(likeProduct("hedfcg"));