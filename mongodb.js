// // CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectID

const {MongoClient, ObjectId} = require('mongodb')

// const id = new ObjectId()
// console.log(id)


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL , { useNewUrlParser: true }, (error, client)=>{
    if(error)
    {
        return console.log('Unable to connect')
    }

    const db = client.db(databaseName)

    //Delete

    db.collection('users').deleteMany({
        age: 18
    }).then((result)=>{
        console.log(result.deletedCount)
    }).catch((error)=>{
        console.log(error)
    })

    //UPDATE

    // db.collection('users').updateOne({
    //     _id: new ObjectId("6011e947b8bda415bc2c4b44")
    // },{
    //     $set:{
    //         name: 'Vishal'
    //     },
    //     $inc: {
    //         age: -4
    //     }
    // }).then((result)=>{
    //     console.log('Updated')
    // }).catch((error)=>{
    //     console.log('Issues')
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set:{
    //         completed: true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log('Issues')
    // })



    // READ
    // db.collection('tasks').findOne({_id: new ObjectId("6011eb0d01d2e62c709f4b05")}, (error,user)=>{
    //     console.log(user)
    // })

    // db.collection('tasks').find({completed: true}).toArray((error,user)=>{
    //     console.log(user)
    // })
    // db.collection('users').findOne({_id : new ObjectId("6011e92d8e240629ec321734")},(error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
        

    // })

    // CURSORS

    // db.collection('users').find({name : 'ankit'}).toArray((error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({name : 'ankit'}).count((error,user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })


    // CREATE
    // db.collection('users').insertOne({
    //     name: 'Amit',
    //     age: 23
    // })

    // db.collection('users').insertMany([{
    //     name: 'ankit',
    //     age: 21
    // },{
    //     name: 'muskan',
    //     age: 18
    // }],(error,result)=>{
    //     if(error)
    //     {
    //         return console.log('Unable to connect')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Homwwork',
    //     completed: true
    // },{
    //     description: 'Haircut',
    //     completed:false
    // },{
    //     description: 'Servicing',
    //     completed: true
    // }],(error,result)=>{
    //     if(error)
    //     {
    //         return console.log('Unable to connect')
    //     }
    //     console.log(result.ops)
    // })

})