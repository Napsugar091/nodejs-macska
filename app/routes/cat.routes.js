module.exports = app => {
    const cats = require("../controllers/cat.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Cats
    router.post("/", cats.create);
  
    // Retrieve all Cats
    router.get("/", cats.findAll);
  
    // Retrieve a single Cats with id
    router.get("/:id", cats.findOne);
  
    // Update a Cats with id
    router.put("/:id", cats.update);
  
    // Delete a Cats with id
    router.delete("/:id", cats.delete);
  
    // Delete all Cats
    router.delete("/", cats.deleteAll);
  
    app.use('/api/cats', router);
  };