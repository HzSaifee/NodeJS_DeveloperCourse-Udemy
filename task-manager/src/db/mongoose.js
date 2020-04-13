const mongoose = require('mongoose');
// const validator = require('validator');

mongoose.connect(process.env.MONOGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});



// const me = new User({
//     name: '     Huzefa ',
//     email: 'hzsaifEE52@gmail.com     ',
//     password: 'huzefa',
//     age: 23
// });

// me.save().then((me) => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error!', error);
// });

// const task = new Task({
//     description: 'Task One',
//     completed: true
// });

// task.save().then((task) => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error!', error);
// });