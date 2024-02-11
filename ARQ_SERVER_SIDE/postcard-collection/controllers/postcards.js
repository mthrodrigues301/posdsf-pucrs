const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const { MongoClient, ObjectId } = require("mongodb");
const postcardsPath = "./postcards.json";

const url = "mongodb://localhost:27017";
const dbName = "postcardsDB";
const collectionName = "postcards";

const listAll = (res) => {
  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    return JSON.parse(data);
  });
};

const listOne = (postId, res) => {
  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data);
    const postcard = postcards.find((post) => post.id === postId);

    if (!postcard) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    return postcard;
  });
};

const add = (body, res) => {
  const { name, cidade, pais, descricao, imageUrl } = body;
  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  };

  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    const postcards = JSON.parse(data);
    postcards.push(newPostcard);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to add new postcard." });
      }

      res.status(201).json(newPostcard);
    });
  });
};

const remove = (req, id) => {
  fs.readFile(postcardsPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Failed to read postcards data." });
    }

    let postcards = JSON.parse(data);
    const postcardIndex = postcards.findIndex((item) => item.id === id);

    if (postcardIndex === -1) {
      return res.status(404).json({ error: "Postcard not found." });
    }

    postcards = postcards.filter((item) => item.id !== id);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Failed to delete postcard." });
      }

      res.status(204).end();
    });
  });
};

const listAllMongo = async (res) => {
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const postcards = await collection.find().toArray();
    res.json(postcards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to list all postcards." });
  } finally {
    await client.close();
  }
};

const addMongo = async (body, res) => {
  const { name, cidade, pais, descricao, imageUrl } = body;
  const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  };

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(newPostcard);
    newPostcard._id = result.insertedId;
    res.status(201).json(newPostcard);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add new postcard." });
  } finally {
    await client.close();
  }
};

exports.listAll = listAll;
exports.listOne = listOne;
exports.add = add;
exports.remove = remove;
exports.listAllMongo = listAllMongo;
exports.addMongo = addMongo;
