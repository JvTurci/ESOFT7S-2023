const carrinho = [
    {
      "nome": "Caneta",
      "qtde": 10,
      "preco": 7.99,
      "data_compra": "2023-03-15",
      "data_entrega": "2023-04-25"
    },
    {
      "nome": "Impressora",
      "qtde": 0,
      "preco": 649.5,
      "data_compra": "2023-03-17",
      "data_entrega": "2023-05-26"
    },
    {
      "nome": "Caderno",
      "qtde": 4,
      "preco": 27.1,
      "data_compra": "2023-03-10",
      "data_entrega": "2023-03-12"
    },
    {
      "nome": "Lapis",
      "qtde": 3,
      "preco": 5.8,
      "data_compra": "2023-03-02",
      "data_entrega": "2023-04-20"
    },
    {
      "nome": "Tesoura",
      "qtde": 1,
      "preco": 19.99,
      "data_compra": "2023-03-25",
      "data_entrega": "2023-04-13"
    },
    {
      "nome": "Estojo",
      "qtde": 1,
      "preco": 32.99,
      "data_compra": "2023-03-25",
      "data_entrega": "2023-04-13"
    }
    ,
    {
      "nome": "Teclado",
      "qtde": 1,
      "preco": 130.00,
      "data_compra": "2023-03-25",
      "data_entrega": "2023-04-13"
    }
    ,
    {
      "nome": "Tenis",
      "qtde": 1,
      "preco": 350.00,
      "data_compra": "2023-03-25",
      "data_entrega": "2023-04-13"
    }
    ,
    {
      "nome": "Fone",
      "qtde": 1,
      "preco": 200.00,
      "data_compra": "2023-03-25",
      "data_entrega": "2023-04-13"
    }
    ,
    {
      "nome": "Mochila",
      "qtde": 1,
      "preco": 150.00,
      "data_compra": "2023-03-25",
      "data_entrega": "2023-04-13"
    }
]
let newProductArray = new Array();

while(newProductArray.length < 3){
    const arrayPosition = Math.floor(Math.random() * carrinho.length)
    if(!newProductArray.includes(carrinho[arrayPosition])){
        newProductArray.push(carrinho[arrayPosition]);
    }
}



function pegarValoresAleatoriosDoArray(array){
    let results = new Array();
    while(results.length < 3){
      const arrayPosition = Math.floor(Math.random() * carrinho.length)
      let encontrouRepetido = false;
      for (let index = 0; index < results.length; index++) {
        if(results[index] === array[arrayPosition]){
          encontrouRepetido = true;
        }
      }
      if(!encontrouRepetido)
        results.push(array[arrayPosition])
    }
    
    return results;
}

console.log(pegarValoresAleatoriosDoArray(carrinho));
