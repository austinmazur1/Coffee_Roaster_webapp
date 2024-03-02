// utils/connectDB.js
import mongoose from 'mongoose';

const connection = {}; // This object will cache the connection

export async function connectDB() {
  if (connection.isConnected) {
    // Use existing database connection
    return;
  }
  // Connect to the database
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
}
