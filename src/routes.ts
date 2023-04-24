import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './controller/productController'
import productStockController from './controller/productStockController'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/products', productController.create)
routes.get('/products', productController.listAll)
routes.get('/products-random', productController.findRandom)
routes.get('/products/:id', productController.find)
routes.delete('/products/:id', productController.delete)
routes.put('/products/:id', productController.update)
routes.post('/products-stock', productStockController.createStock)
routes.get('/products-stock', productStockController.findAll)
routes.get('/products-stock-value', productStockController.stockValue)
routes.delete('/products-stock', productStockController.deleteAllStock)
routes.delete('/products-stock/:id', productStockController.deleteById)
routes.post('/products-file', productController.createProductFile)
routes.get('/products-file', productController.findByFile)

export default routes