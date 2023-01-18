const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema (
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        imgUrl: { type: String, required: true }
    },
    { timestamps: true }
)
const Products = mongoose.model("products", userSchema)
const app = express();


app.use(cors());
app.use(bodyParser.json());

const port = 8000;
//get products
app.get("/products", (req, res) => {
    Products.find({}, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        res.status(500).json({ message: err });
      }
    });
  });
//get products by ID
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
  
    Products.findById(id, (err, doc) => {
      if (!err) {
        if (doc) {
          res.send(doc);
          res.status(200);
        } else {
          res.status(404).json({ message: "NOT FOUND" });
        }
      } else {
        res.status(500).json({ message: err });
      }
    });
  });
//delete products by ID
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    Products.findByIdAndDelete(id, (err) => {
        if(!err) {
            res.send("DELETED");
        }
        else {
            res.status(404).json({ message: err })
        }
    });
});
//post new products
app.post("/products/", (req, res) => {
    let product = new Products({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
    });
    product.save();
    res.send({ message: "SUCCESS"});
})
mongoose.connect(
  "mongodb+srv://lemanjaffar:lemanjaffar@cluster0.o26j4pn.mongodb.net/AF202",
  (err) => {
    if (!err) {
      console.log("DB CONNECTED");
      app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`);
      });
    }
  }
);