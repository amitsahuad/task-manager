const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})



const Task = mongoose.model('Task',{
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

const task = new Task({
    description: 'Homework',
    completed: true
})

task.save().then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


// const User = mongoose.model('User',{
//     name:{
//         type: String
//     },
//     age:{
//         type: Number
//     }
// })

// const me = User({
//     name: 'Mike',
//     age: 27
// })
// me.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })