var db = require("../models");

module.exports = function(app) {
  app.get("/api/back", function(req, res) {
    db.exercises.findAll({}).then(function(dbBack) {
      res.JSON(dbBack);
      console.log("dbBack" + dbBack);
    });
  });
};
