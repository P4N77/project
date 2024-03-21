import { Router } from "express";
import {getUsers, createUsers, updateUsers, deleteUsers, getUserById} from '../controller/users.controller.js'

const router = Router()

router.get('/usuarios', getUsers)

router.get('/usuarios/:id', getUserById)

router.post('/usuarios', createUsers)

router.patch('/usuarios/:id', updateUsers)

router.delete('/usuarios/:id', deleteUsers)

export default router