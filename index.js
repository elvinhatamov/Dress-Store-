const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({"message": "Welcome to DresStore Application"});
});

const MONGODB_URI = 'mongodb+srv://ehatemov:3XS6HilP3X1NYX7O@dressstore.ciqahuq.mongodb.net/';

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
     useUnifiedTopology: true })
     .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

    app.use('/api', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
