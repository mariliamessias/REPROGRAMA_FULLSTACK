let botao = document.getElementById("btnIncluir");

botao.addEventListener('click', function(event){

    event.preventDefault();

    let produto = document.getElementById("produto");
    let preco = document.getElementById("preco");
    let link = document.getElementById("imagemProduto");

    var newProduct = {
        product:{
            "name": "",
            "images": [
                ""
            ],
            "price": {
                "value": 0
            }
        }
    };

    newProduct.product.name = produto.value;
    newProduct.product.images[0] = link.value;
    newProduct.product.price.value = preco.value;
    
    data.items.push(newProduct);

    showProducts();
   

});

