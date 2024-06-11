const express = require("express");
const router = express.Router();
const Order = require("../models/ordermodels");

// Create an order
router.post("/", async (req, res) => {
  const { customerName, totalSpent, noOfVisits, datetimeVisited } = req.body;
  try {
    const orderAdded = await Order.create({
      customerName,
      totalSpent,
      noOfVisits, 
      datetimeVisited,
    });
    res.status(201).json(orderAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single order by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleOrder = await Order.findById(id);
    res.status(200).json(singleOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an order by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    res.status(201).json(deletedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an order by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
