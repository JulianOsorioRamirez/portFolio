const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb+srv://julianOsorio:121314@cluster0.qetsuex.mongodb.net/test";

const taskDates = {
    dates : (req, res) => {
        const mydb = "Task";
        const coleccion = "TaskDates";
         
        MongoClient.connect(url, function(err, db) {
          if (err) throw err;
          var dbo = db.db(mydb);
          dbo.collection(coleccion).find({}).toArray(function(err, result) {
              if (err) throw err;
              console.log(result);
              // result = result.length 
              res.json(result)
              db.close();
          });
        });
    }
}

module.exports = taskDates;
