import express from 'express'  
import { getUserController } from '../controllers/user/src/controllers/user/src/controllers/user/src/controllers/user/getUserController' 

const userRouter = express.Router()
Router.get('/', getUserController)

userRouter.get('/', (req, res) => {
  res.send('Exemplo de GET na rota /user no Router')
})

userRouter.post('/', (req, res) => {
  res.send('Exemplo de POST na rota /user no Router')
})

userRouter.put('/', (req, res) => {
  res.send('Exemplo de PUT na rota /user no Router')
})
userRouter.patch('/', (req, res) => {
  res.send('Exemplo de PATCH na rota /user no Router')
})
userRouter.delete('/', (req, res) => {
  res.send('Exemplo de DELETE na rota /user no Router')
})

export default userRouter

