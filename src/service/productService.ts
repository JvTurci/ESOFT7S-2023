import { writeFile, readFile } from 'fs/promises'

class productService{

    public async createProductJsonFile(text : String){
        try {
            await writeFile('products.json', JSON.stringify(text, null, 2))
            return "Ok";
        }
        catch(err) {
            console.error('Erro na escrita', err)
            return
        }
    }

    public async readProductJsonFile(){
        try{
            const products = await readFile('products.json');
            return JSON.parse(products.toString('utf8')); 
        }catch(err){
            throw new Error(err); 
        }
    }

    public async productsStock(){
        try{
            const products = await this.readProductJsonFile();
            const productsStock = products.map( product => {
                return {
                    nome: product.nome,
                    qtde: product.qtde,
                    preco: product.preco, 
                    valor_estoque: product.qtde * product.preco
                }
            });

            return productsStock;
        }catch(err){

        }
    }
}

export default new productService()