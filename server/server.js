import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

//Config env
dotenv.config();

//create db info variables
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

//create express server, enable cors and set PORT
const app = express();
app.use(cors()); // Enable CORS for all routes
// Middleware to parse JSON bodies
app.use(express.json());
const PORT = 3000;

app.get("/employees", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const employees = await collection.find({}).toArray();
    res.json(employees);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Could not find any employees in our records");
  }
});

app.post("/employees/search", async (req, res) => {
  try {
    // TODO: Add code that can search MongoDB based on a color value
    // from the Search text box.
    const { searchTerm } = req.body;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const regex = new RegExp(searchTerm, "i"); // Create a case-insensitive regular expression
    const employee = await collection.find({ name: regex }).toArray();
    res.json(employee);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error fetching Employees");
  }
});

app.get("/employees/:employee_id", async (req, res) => {
  try {
    const id = parseInt(req.params.employee_id);
    console.log(id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const employees = await collection.findOne({ employee_id: id });
    res.json(employees);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Could not find any employees in our records");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
