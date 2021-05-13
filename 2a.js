const DB = require("./database");
let users = [...DB.users];

let lastIdx = 0;

const signUp = (email, username, password) => {

    let existingUser = users.find(user=> user.email===email);
    
    if(existingUser) return `Email already exists. Please Login`
    lastIdx += 1;

    const newUser = {
        _id: lastIdx,
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
        isLoggedIn: true
    }

    return newUser
}

// console.log(signUp("rahulraina711@gmail.com","rahulraina711","12345678"));

const signIn = (username, password) => {

    let existingUser = users.find(user=> user.username===username);

    if(!existingUser) return `User not found. Please Sign Up`;

    if(existingUser.password !== password) return `Either username or password is incorrect`;

    let resp = {
        username,
        isLoggedIn: true,
        loginTime : new Date().toLocaleDateString()
    }
    return resp;
};

//console.log(signIn("A1lex", "023123"));