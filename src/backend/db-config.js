const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Barredaca23:Nico8dani17@cluster0.nsbd9jh.mongodb.net/airscape', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;