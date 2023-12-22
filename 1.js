class ProductManager{
    constructor(){
        this.products = []
    }

    static globalId = 0

    productId(){
        ProductManager.globalId+=1
        return ProductManager.globalId
    }

    addProduct(prod){
        if(!prod.title || !prod.description || !prod.price || !prod.thumbnail || !prod.code || !prod.stock){
            console.log("Todos los campos son obligatorios")
            return
        }else if(this.products.some(product => product.code === prod.code)){
            console.log("El codigo del producto es repetido")
            return
        }else{
            this.product = {...prod,"id":this.productId()}
            this.products.push(this.product)
        }
    }

    getProducts() {
        return this.products
    }

    getProductById(id){
        const productFound = this.products.find(product => product.id === id)
        return productFound ? productFound : "Not Found"
    }
}

const products = new ProductManager()
const product1 = {
    "title": "producto prueba",
    "description":"Este es un producto prueba",
    "price":200,
    "thumbnail":"Sin imagen",
    "code":"abc123",
    "stock":25
}
console.log("------------------------------------------------------------")
console.log(products.getProducts())
console.log("------------------------------------------------------------")
products.addProduct(product1)
console.log(products.getProducts())
console.log("------------------------------------------------------------")
products.addProduct(product1)
console.log("------------------------------------------------------------")
console.log(products.getProductById(1)) // Encuentra el producto
console.log("------------------------------------------------------------")
console.log(products.getProductById(15)) // NO encuentra el producto
console.log("------------------------------------------------------------")
