import express from "express";
import { explorePopularRepo } from "../controllers/explore.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();


router.get("/repos/:language",ensureAuthenticated,explorePopularRepo);


export default router;