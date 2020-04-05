// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!');
    }

    // console.log('Connected Correctly!');

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     // _id: id,
    //     name: 'Huzefa Saifee',
    //     age: 23
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Hz',
    //         age: 23
    //     },{
    //         name:'Huzu',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task One',
    //         completed: true
    //     },{
    //         description: 'Task Two',
    //         completed: false
    //     },{
    //         description: 'Task Three',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert three tasks!');
    //     }

    //     console.log(result.ops);
    // });

});