import express from 'express'   

const postRouter = express.Router()



postRouter.get('/', (req, res) => {
  res.send('Exemplo de GET na rota /post no Router')
})

postRouter.post('/', (req, res) => {
  res.send('Exemplo de POST na rota /post no Router')
})

postRouter.put('/', (req, res) => {
  res.send('Exemplo de PUT na rota /post no Router')
})
postRouter.patch('/', (req, res) => {
  res.send('Exemplo de PATCH na rota /post no Router')
})
postRouter.delete('/', (req, res) => {
  res.send('Exemplo de DELETE na rota /post no Router')
})

export default postRouter

