import { Request, Response } from 'express';
import productService from '../service/productService';

class ProductController {
    public async getProducts(req: Request, res : Response) {
        try{
            const products = await productService.readProductJsonFile();
            return res.json(products);
        }catch(err){
            return res.status(500).send();
        }
    }

    public async getProductsStock(req: Request, res : Response){
        try{
            const productsStock = await productService.productsStock();
            return res.json(productsStock);
        }catch(err){
            return res.status(500).send();
        }
    }

    public async postProducts(req: Request, res: Response){
        try{
            const products : any = await productService.createProductJsonFile(req.body)

            if(!products) throw new Error()
            
            return res.status(201).send();
        }catch(err) {
            
            return res.status(500).send();
        }
    }
}

export default new ProductController()