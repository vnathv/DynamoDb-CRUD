var AWS = require("aws-sdk");

AWS.config.update({
    region: "REGION"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {   
    var table = "EmployeeDetails";

    var params = {
        TableName: table,
        Item: {
            "Id" : event.Id,
            "FirstName": event.FirstName,
            "LastName": event.LastName,
            "Age": event.Age,
            "Gender": event.Gender
        }
    };

  
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            callback(null, "Added item:", JSON.stringify(data, null, 2))
        }
    });
   
};