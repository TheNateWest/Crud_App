require('dotenv').config();
let express = require("express");

let app = express();

const port = process.env.PORT || 4001;

app.use(express.static(__dirname + "/public"));
app.use(express.json());

let authRoutes = require('./routes/authRoutes');
let messageRoutes = require('./routes/messageRoutes');
const usersRoutes = require("./routes/users")

app.use('/', authRoutes);
app.use('/', messageRoutes);
app.use('/users', usersRoutes);

// app.get('/', (req, res)=>{
//     res.json('hello')
// })


app.listen(port, () => {
    console.log('Web server listening on port ', port);
});