/*
    1. Import the http module and store that in a varibale named http
*/
const http = require("http");


/*
    2. Declare a const for PORT and assign it a port number of 4000 
*/
const PORT = 4000;

/*
    3. Create the server using http.createServer(callback) method. 
    You can name your callback function onRequest
*/
let server = http.createServer(on_request);


/*
    4. Write the onRequest function here. Remember, this function takes in 2 parameters (request, response). This function should handle the following. If the user goes to '/', the function should respond with "Hello World!" message.
    Hint: '/' is the home page
*/
function on_request(request, response) {
    console.log("Hey I got a request");
    const url = request.url;
    console.log("The user is on this" + url);

    if (url ==="/about") {
        response.write("I am on about page");
        response.end();
    } else if (url === '/contact') {
        response.write("I am on contact page");
        response.end();
    } else if (url === '/profile') {
        response.write("I am on profile page");
        response.end();
    } else if (url === '/') {
        response.write("Hello World!");
        response.end(); 
    }else {
        response.write("ERROR. Page not found");
        response.end();

    }
}

/*
    5. Start the server by listening on the PORT. 
    Once the server is started, print a message saying that server is running.
*/
server.listen(PORT, on_server_start) 

function on_server_start () {
    console.log("server is running!");
    
}

/*
    6. Now go back to your onRequest function and add the following:
        6.1. When the user goes to the '/contact' page, the server should respond with the message "This is the contact page."
        6.2. When the user goes to the '/about' page, the server should respond with the message "This is the about page."
        6.3. When the user goes to the '/profile' page, the server should respond with the message "This is your profile page."
        6.4. If user type anything else besides the above, the server should respond with the message "Error: Page not found."
*/ 


/*
    7. Write the onRequest function as an arrow function in http.createServer()
*/
// For example: If I were to write server.listen(PORT, onServerStart) as an arrow function, I would do the following:
server.listen(PORT, () => {
    console.log("Server is running!");
});

/////////////////////////////////////////////// 
http.createServer(response, () => {
    console.log("Hey I got a request");
    const url = request.url;
    console.log("The user is on this" + url);

    if (url ==="/about") {
        response.write("I am on about page");
        response.end();
    } else if (url === '/contact') {
        response.write("I am on contact page");
        response.end();
    } else if (url === '/profile') {
        response.write("I am on profile page");
        response.end();
    } else if (url === '/') {
        response.write("Hello World!");
        response.end(); 
    }else {
        response.write("ERROR. Page not found");
        response.end();

    }
});




