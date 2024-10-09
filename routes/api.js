import express from "express";
const router = express.Router();
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import * as UsersController from "../app/controllers/UsersController.js";
import *as fileController from "../app/controllers/fileController.js";

// Users
router.post("/login", UsersController.login)
router.post("/register", UsersController.register)
router.get("/profile-read", AuthMiddleware, UsersController.profileRead)
router.post("/profileUpdate",AuthMiddleware, UsersController.profileUpdate)
router.get("/logout", AuthMiddleware, UsersController.logOut)

router.post("/upload",AuthMiddleware,fileController.uploadFile);
router.get("/read/:filename",AuthMiddleware, fileController.readFile);
router.delete("/delete/:filename",AuthMiddleware, fileController.deleteFile);

export default router;
