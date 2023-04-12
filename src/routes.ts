import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import productController from './controller/productController'
import userController from './controller/userController'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/products', productController.create)
routes.get('/products', productController.list)
routes.get('/products-stock', productController.getStock)
routes.get('/products-stock-value', productController.getStockValue)

export default routes