// const mongoose = require("mongoose");

// const mongooseConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URL)
//     .then(() => {
//       console.log("Connected to Mongooes ");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// module.exports = mongooseConnection;

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
