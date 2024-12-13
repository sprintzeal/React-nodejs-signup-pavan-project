const mongooes = require("mongoose")


const schema = new mongooes.Schema({
    name : String,
    email : String,
    city : String,
    password : String
})

const database = mongooes.model('data', schema);
export default database;