import express  from "express";
import { signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', signUp )

router.get('/signin', (req, res) => {
  
})

router.get('/logout', (req, res) => {
  
})

export default router;