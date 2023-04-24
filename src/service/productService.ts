import { writeFile, readFile } from 'fs/promises'
import { ProductType } from 'src/interfaces/types/product.types';
import productModel from '../schemas/Product'

class ProductService {
    async createProduct(product : ProductType){
        try {
            const productCreated = await productModel.create(product);
            return productCreated   
        } catch (error) {
            throw new Error(error)
        }
    }

    async findProducts() {
        try {
            const productList = await productModel.find();
            return productList
        } catch (error) {
            throw new Error("Erro ao ler lista de produtos")
        }
    }

    async findProductById(id) {
        try {
            const product = await productModel.findById(id)
            return product
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateProduct(id, data : ProductType){
        try {
            const updatedProduct = await productModel.findOneAndUpdate({_id: id}, {
                name : data.name,
                quantity : data.quantity,
                price : data.price
            }, {new : true})
    
            return updatedProduct
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteProduct(id){
        try {
            await productModel.findByIdAndDelete(id)
            return "succesfully delete product!"
        } catch (error) {
            throw new Error(error)
        }
    }

    async randomProducts(){
        try {
            const products = await productModel.find().limit(10)
            let randomProducts : any[] = new Array()
    
            while(randomProducts.length < 4){
                const randomProsition = Math.floor(Math.random() * products.length);
                if(!randomProducts.includes(products[randomProsition])){
                    randomProducts.push(products[randomProsition])
                }
            }
    
            return randomProducts;
        } catch (error) {
            throw new Error(error)
        }
    }

    async writeJsonFile(){
        try {
            const productList = await this.findProducts()
            await writeFile('products.json', JSON.stringify(productList, null, 2))
            return "Json file created!"
        } catch (error) {
        throw new Error(error)    
        }
    }

    async readJsonFile(){
        try {
            const productList = await readFile('products.json', "utf-8")
            return JSON.parse(productList)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default new ProductService()