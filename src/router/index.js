import { Router } from "express";

const router = Router();
const titleGlobal = "My Site";
router.get("/", (req, res) => res.render("index", { title: `${titleGlobal}` }));
router.get("/about", (req, res) =>
  res.render("about", { title: `${titleGlobal}` })
);
router.get("/contact", (req, res) =>
  res.render("contact", { title: `${titleGlobal}` })
);

export default router;
