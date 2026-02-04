const express = require("express");
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/Task-controller");

const router = express.Router();

router.use(auth);

router.post("/", controller.createTask);
router.get("/", controller.getTasks);
router.put("/:id", controller.updateTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;
