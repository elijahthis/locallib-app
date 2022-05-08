const mongoose=require("mongoose");
const db ="mongodb+srv://peculiar-codes:banks-bym@db1.cy4p7.mongodb.net/Peculiardb2?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const connect=await mongoose.connect(db, {
      useNewUrlParser: true
    });
console.log(connect.connection.host);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports=connectDB;


