import { Request, Response } from 'express'
import stockService from "../service/stockService"

class ProductStockController {
    async createStock(req : Request, res : Response) {
        const productStock = await stockService.createStock();
        return res.status(200).json(productStock)
    }

    async findAll(req : Request, res : Response){
        const productStock = await stockService.findStock()
        return res.status(200).json(productStock)
    }
    
    async stockValue(req: Request, res: Response) {
        const stockValue = await stockService.getStockValue()

        return res.status(200).json(stockValue)
    }

    async deleteById(req: Request, res: Response){
        const stockDeleted = await stockService.delete(req.params.id)
        return res.status(200).json(stockDeleted)
    }

    async deleteAllStock(req: Request, res: Response){
        const stockDeleted = await stockService.deleteAll();
        return res.status(200).json(stockDeleted)
    }
}

export default new ProductStockController()