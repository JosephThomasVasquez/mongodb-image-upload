const mongoose = require("mongoose");
const chalk = require("chalk");

const connect = async () => {
  try {
    //   connection parameters for mongoose
    // As of v6.0+ these parameters are already set to true and no longer need to be declared

    // const connectionParams = {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useUnifiedTopology: true,
    // };

    // connect to the mongodb database and use connection Parameters
    await mongoose.connect(process.env.MONGODB_URI);

    console.log(chalk.greenBright(`Connection to database successful!`));
  } catch (error) {
    console.log(chalk.red("Connection to database failed!"));
    console.log(chalk.bgRed("An error occured:", error));
  }
};

module.exports = connect;
