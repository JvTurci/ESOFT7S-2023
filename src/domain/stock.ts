import { ProductStockType } from "src/interfaces/types/productStock.type"

class Stock {
    async addStock(products) {
        const productStock: ProductStockType[] = products.map(item => {
            return {
                name : item.name,
                quantity : item.quantity,
                price : item.price,
                stockValue : item.price.valueOf() * item.quantity.valueOf()
            }
        })

        return productStock
    }
}

export default new Stock()