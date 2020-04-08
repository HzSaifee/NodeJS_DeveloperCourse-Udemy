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

    // db.collection('users').findOne({ age: 23, _id: new ObjectID("5e8a588500ea6245bc13628a") }, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // });

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(users);
    // });

    // db.collection('users').find({ age: 23 }).count((error, count) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(count);
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID("5e8a5d9247dddd22746651d1") }, (error, task) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(task);
    // });

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(tasks);
    // });

    // db.collection('users').updateOne({
    //      _id: new ObjectID("5e8695d7ad1e350e7c9230b6") 
    //     }, {
    //         $inc: {
    //             age: 1
    //         }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //      completed: false
    //    }, {
    //        $set: {
    //            completed: true
    //        }
    // }).then((result) => {
    //    console.log(result.modifiedCount);
    // }).catch((error) => {
    //    console.log(error);
    // })



});