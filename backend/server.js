
const connectDB = require('./src/db/db');
const app =  require("./src/app")
require('dotenv').config();

connectDB();


app.get('/', (req, res) => {
    res.send('API is running...');
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});