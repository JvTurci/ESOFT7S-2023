import ProductStockModel from "../schemas/ProductStock";
import productService from "./productService";
import stock from "../domain/stock";

class StockService {
    async createStock(){
        try {
            const products = await productService.findProducts()
    
            const productStock = await stock.addStock(products)
    
            const stockCreated = await ProductStockModel.create(productStock)
            return stockCreated;
        } catch (error) {
            throw new Error(error)
        }
    }

    async findStock(){
        try {
            const productStock = await ProductStockModel.find()
            return productStock
        } catch (error) {
            throw new Error(error)
        }
    }

    async getStockValue() {
        try {
            const stock = await this.findStock()
    
            const stockValue = stock.reduce((acc, atual) => {
                acc += atual.stockValue
    
                return acc
    
            }, 0)
    
            return stockValue
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAll() {
        try {
            const stocks = await this.findStock();
            stocks.forEach(element => {
                this.delete(element.id)
            });
            return "Stock deleted!"
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(id){
        try {
            await ProductStockModel.findByIdAndDelete(id);
            return "successfully deleted product stock!"
        } catch (error) {
            throw new Error(error)   
        }
    }
}

export default new StockService()