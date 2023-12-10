const mongoose = require('mongoose');


module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(process.env.mongoDB_URI, connectionParams);
    console.log('Connected to the database successfully');
  } catch (error) {
    console.error('Could not connect to the database');
    console.error(error);
  }
};
