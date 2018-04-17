Simple weather app  
What I used  
Node.js  
Express.js command : npm install --save express  
EJS (embedded javascript)
HTML and CSS   
  
To use EJS in Express setup template engine
"A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page."

or in simpler words we can use variables and dynamically use those to create our HTML file to send it to the browser

command :npm install ejs --save  
EJS is accessed by default in the views directory

to add css files create a resources directory and add all static syling files  
add app.use(express.static('resources')) in your code  
The above code basically allows access to all the static files in public folder. 

Express Middleware (functions that have access to the req and res bodies) in order to preform more advanced tasks.  
body-parser middleware. body-parser allows us to make use of the key-value pairs stored on the req-body object  
Command: npm install body-parser --save  

to get an api key to use the weather API go to https://home.openweathermap.org/users/sign_up to sign up for a new account (free) and generate an API key and use it  