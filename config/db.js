import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false); // set the strictQuery option explicitly
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB

// useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
