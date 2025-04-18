const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/userRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})