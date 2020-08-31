const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const firstInfo = await db.Information.findAll({
      where: { section: 1 },
      attributes: ["title", "url", "date"],
      order: [["date", "DESC"]],
    });
    const secondInfo = await db.Information.findAll({
      where: { section: 2 },
      attributes: ["title", "url", "date"],
      order: [["date", "DESC"]],
    });
    const thirdInfo = await db.Information.findAll({
      where: { section: 3 },
      attributes: ["title", "url", "date"],
      order: [["date", "DESC"]],
    });
    return res.json({ 1: firstInfo, 2: secondInfo, 3: thirdInfo });
  } catch (e) {
    console.error(e);
    return next(e);
  }
});

module.exports = router;
