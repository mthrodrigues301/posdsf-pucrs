var express = require("express");
var router = express.Router();
const {
  listAll,
  listOne,
  add,
  remove,
  listAllMongo,
  addMongo,
  removeMongo,
} = require("../controllers/postcards");

// Rota GET para obter todos os Postcards
router.get("/", (req, res) => {
  const postcards = listAll(res);
  return res.json(postcards);
});

// Rota GET para obter um único Postcard pelo ID
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const postcard = listOne(postId, res);
  return res.json(postcard);
});

// Rota POST para adicionar um novo Postcard
router.post("/", (req, res) => {
  add(req.body, res);
});

// Rota DELETE para remover um Postcard existente
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  remove(req, id);
});

// Rota GET para obter todos os Postcards do banco de dados mongo
router.get("/listAllMongo", (req, res) => {
  listAllMongo(res);
});

// Rota POST para adicionar um novo Postcard no banco de dados mongo
router.post("/addMongo", (req, res) => {
  addMongo(req.body, res);
});

module.exports = router;
