const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//     // console.log(req.method, req.path);
//     if(req.method == 'GET'){
//         res.send('Sorry! GET Requests are currently disabled! Try Again Later');
//     }else{
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Sorry! The site is currently disabled! Try Again Later, After the Maintainance is done.');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})