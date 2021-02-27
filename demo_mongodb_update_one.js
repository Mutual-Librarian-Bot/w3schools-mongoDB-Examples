var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db)
{
    if (err) throw err;
    var dbo = db.db("mydb");
    var myQuery = { address: "Valley 345" };
    var newValues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myQuery, newValues, function(err, res) // [When using the $set operator, only the specified fields are updated]
                                                                    // [Meaning that if you only wanted to update the address, you only need to specify address, no name required.]
    {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});