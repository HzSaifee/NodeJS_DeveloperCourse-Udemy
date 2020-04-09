require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e8e8d90b518c4308c9df506').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ complete: true });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const user = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ complete: true });

    return count;
}

deleteTaskAndCount('5e8e51a158ce73214cd4084f').then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(e);
});