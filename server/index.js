const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
//connection to mongodb
const {connectToDb} = require('./db');


connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors(
    {
        origin: 'http://localhost:3000',
    }
));

app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.use('/api', require('./routes/route'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

