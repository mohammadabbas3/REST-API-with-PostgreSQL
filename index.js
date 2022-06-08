require('dotenv').config()
const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const accountsRouter = require('./routes/index');
const bodyParser = require('body-parser')
const app = express()
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const postgreSQL = require('./config/db')


const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true, }))


app.use(morgan("dev"));
app.use(cors());
app.use('/accounts',accountsRouter);
app.use('/api',swaggerUI.serve,swaggerUI.setup(docs));


postgreSQL.connect().then(() => {
    console.log('DB connected')
}).catch((e) => {
    console.log('DB connection error', e)
})

// app.get('/api/get/user', (req, res) => {
//     // INSERT INTO users (name, age) VALUES ('areeb', 1)
//     try {
//         client.query(`Select * from users`, (err, result) => {
//             if (err) {
//                 console.log('err', err)
//                 return res.send({
//                     success: false,
//                     status: 500,
//                     message: 'something went wrong'
//                 })
//             }

//             return res.send({
//                 success: true,
//                 status: 200,
//                 data: result.rows,
//                 message: 'hello user'
//             })
//         })
//     } catch (error) {
//         console.log('catcj error', error)
//         return res.send({
//             success: false,
//             status: 500,
//             message: 'something went wrong'
//         })
//     }
// })


app.use('/api', require('./routes'))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})