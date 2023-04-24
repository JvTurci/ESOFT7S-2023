import { Request, Response} from 'express'
import productService from '../service/productService'

class ProductController {
    async create(req: Request, res: Response){
        productService.createProduct(req.body)
        return res.status(201).send()
    }

    async listAll(req: Request, res: Response) {
        const productList = await productService.findProducts()

        return res.status(200).json(productList)
    }

    async find(req: Request, res: Response){
        const product = await productService.findProductById(req.params.id);
        return res.status(200).json(product)
    }

    async update(req: Request, res: Response) {
        const product = await productService.updateProduct(req.params.id, req.body)
        return res.status(200).json(product)
    }

    async delete(req: Request, res: Response) {
       const deleteProduct = await productService.deleteProduct(req.params.id)
        return res.status(200).json(deleteProduct)
    }

    async findRandom(req: Request, res: Response){
        const products = await productService.randomProducts()
        return res.status(200).json(products)
    }

    async createProductFile(req: Request, res: Response){
        const file = await productService.writeJsonFile()
        return res.status(200).json(file)
    }

    async findByFile(req: Request, res: Response){
       const file = await productService.readJsonFile()
       return res.status(200).json(file)
    }
}

export default new ProductController()