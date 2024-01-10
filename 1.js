const fs = require("fs")

class ProductManager{
    constructor(path){
        this.path = path
        this.writeFile("[]")
    }

    writeFile(cont){
        try {
            fs.writeFileSync(this.path,cont,"utf-8")
        } catch (error) {
            console.error("Error al escribir el archivo: ", error)
        }
    }

    readFile(){
        try {
            const data = fs.readFileSync(this.path,"utf-8")
            return JSON.parse(data)
        } catch (error) {
            console.log("error de lectura: ",error)
        }
    }

    getProducts(){
        console.log(this.readFile())
    }


    static globalId = 0

    productId(){
        ProductManager.globalId+=1
        return ProductManager.globalId
    }

    addProduct(prod){
        const products = this.readFile()

        if(!prod.title || !prod.description || !prod.price || !prod.thumbnail || !prod.code || !prod.stock){
            console.log("Todos los campos son obligatorios")
            return
        }else if(products.some(product => product.code === prod.code)){
            console.log("El codigo del producto es repetido")
            return
        }else{
            const product = {...prod,"id":this.productId()}
            products.push(product)
        }
        this.writeFile(JSON.stringify(products))
    }

    getProductById(id){
        const products = this.readFile()
        const productFound = products.find(product => product.id === id)
        return productFound ? productFound : "Not Found"
    }

    updateProduct(id,title,desc,price,thumbnail,code,stock){
        const products = this.readFile()
        const product = this.getProductById(id)
        const index = products.indexOf(product)
        if(product==="Not Found"){
            console.log("Not Found")
            return 1
        }
        product.title = title || product.title
        product.description = desc || product.description
        product.price = price || product.price
        product.thumbnail = thumbnail || product.thumbnail
        product.code = code || product.code
        product.stock = stock || product.stock

        products.splice(index,1,product)
        this.writeFile(JSON.stringify(products))
    }

    deleteProduct(id){
        const products = this.readFile()
        const product = this.getProductById(id)
        const index = products.indexOf(product)

        if(product==="Not Found"){
            console.log("Not Found")
            return 1
        }

        products.splice(index,1)
        this.writeFile(JSON.stringify(products))
    }

}

const products = new ProductManager("testProducts.txt")
const product1 = {
    "title": "producto prueba",
    "description":"Este es un producto prueba",
    "price":200,
    "thumbnail":"Sin imagen",
    "code":"abc123",
    "stock":25
}

console.log("------------------------------------------------------------")
products.getProducts()
console.log("------------------------------------------------------------")
products.addProduct(product1)
products.getProducts()
console.log("------------------------------------------------------------")
products.addProduct(product1)
console.log("------------------------------------------------------------")
console.log(products.getProductById(1)) // Encuentra el producto
console.log("------------------------------------------------------------")
products.updateProduct(1,'','esta es la descripcion modificada','','','ABC123','')
console.log(products.getProductById(1)) // Encuentra el producto
console.log("------------------------------------------------------------")
products.deleteProduct(1)
products.getProducts()
console.log("------------------------------------------------------------")

