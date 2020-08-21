var mongoose = require('mongoose');

var conn = mongoose.connect('mongodb+srv://darshan:connect@cluster0-o1lw9.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=>{
    console.log('mongoose connected');
})
.catch(()=>{
    console.log('mongoose not connect');
})

module.exports = conn;