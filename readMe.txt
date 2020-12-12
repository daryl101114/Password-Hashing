***************** DB CONNECTION STRING ****************************
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jdsantil:<password>@mycluster.yhkrx.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
----------------------------------------------------------------------

Dependencies used for server side:
-Express -BodyParser -MongoDB 

SERVER SIDE ARCHITECTURE
-[x]MODEL: MANAGES EACH COLLECTION ATTRIBUTES
-[x]API-ROUTES: ALL ENDPOINTS ARE DEFINED IN HERE
-[x]CONTROLLER: PROCESS HTTP REQUESTS AND DEFINES AVAILABLE ENDPOINTS

TODO:
-[x] create a RestAPI for users 
-[x] Ability to POST a new user
  -[x] use postman to test if POST functionality is working
  -[] install a password hashing dependency ??Bcrypt??
  -[] Generate Hashed passwords for created user
    
-[] Update a user
  -[] use postman to test PUT functionality (update)
-[] Findby password(Hashed password)
  -[] Use postman to test GET function by password