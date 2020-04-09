require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5e8e64a6a739921cb45fedc6', { age: 24 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 24 });
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });

    return count;
}

updateAgeAndCount('5e8e64a6a739921cb45fedc6', 25).then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(e);
});