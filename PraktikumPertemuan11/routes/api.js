const StudentController = require("../controllers/StudentController.js");
const express = require("express");

const router = express.Router();

// mendefinisikan route
router.get("/", (req, res) => {
  res.send("Hello Express");
});

// Routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.post("/students/:id", StudentController.update);
router.post("/students/:id", StudentController.destroy);

// export router
module.exports = router;