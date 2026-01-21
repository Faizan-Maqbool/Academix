const express = require("express");
const { approveUser, getPendingUsers, createClass } = require("../controllers/adminController");
const { protect, allowRoles } = require("../middleware/authMiddleware");
const router = express.Router();

router.put("/approve-user/:id", protect, allowRoles("admin"), approveUser);
router.get("/pending-users", protect, allowRoles("admin"), getPendingUsers);
router.post("/create-class", protect, allowRoles("admin"), createClass);

module.exports = router;
