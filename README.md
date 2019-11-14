# NodeJS App with Express server  
# Passport authentication and cloud database with MongoDB.Atlas

# Installation   
•Install NodeJS v12.x.x   
•Clone this repo to your computer    
•Open a terminal and navigate to repo directory    
•Install the required dependecies with: npm install

# Usage   
•Navigate to https://cloud.mongodb.com/ and log in or register for a new account  
•From dashboard create new cluster & select AWS as the provider  
•From dashboard add user with password      
•In Security settings set your IP Whitelist to your IP address or 0.0.0.0    
•From your cluster click on CONNECT and select Connect Your Application     
•Copy SRV connection string and paste it to replace the one in key.js in the config folder  
•Remember to include your user password in your new connection string


# Tasks Performed  
### •Used Mongoose methods to make HTTP requests & parse incoming JSON data  
### •Created Router node module to handle request & response routing  
### •Used Boom methods for HTTP error handling 
### •Used Mongoose to interface between API & database  
•Managed relational database translation between API & database Objects via ODM library  
### •Generated Swagger compliant documentation with Fastify-Swagger  
### •Implemented JWT compliance via Fastify-JWT
