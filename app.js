const fs = require("fs/promises")
const express = require("express")

const app = express()
const PORT = 8080

class ProductManager{
    constructor(){
        this.filePath = "products.json"
    }


    async getProducts(limit){
        try {
            let products = []
            if(await fs.access(this.filePath).then(()=>true).catch(()=>false)){
                const fileContent = await fs.readFile(this.filePath,"utf8")
                products = JSON.parse(fileContent)
                if(limit){
                    products = products.slice(0,limit)
                }
                return products
            }
        }catch(error){
            console.log("error al leer el archivo")
        }
    }


    async getProductById(id){
        const products = await this.getProducts()
        const productFound = products.find(product => product.id === id)
        if(productFound){
            return productFound
        }else{
            return {error: "Product not found"}
        }
    }

}

const productsManager = new ProductManager()

app.get('/products', async (req,res)=>{
    try{
        const limit = parseInt(req.query.limit)
        const products = await productsManager.getProducts(limit)
        res.json(products)
    }catch(error){
        console.error('Error al obtener productos:', error.message)
        res.status(500).json({ error: 'Error al obtener productos' })
    }
})

app.get('/products/:id', async (req,res)=>{
    try{
        const productId = parseInt(req.params.id)
        productFound = await productsManager.getProductById(productId)
        res.json(productFound)
    }catch(error){
        console.error('Error al obtener el producto:', error.message)
        res.status(500).json({ error: 'error al obtener el producto' })
    }
})


app.listen(PORT, ()=>{console.log("Servidor en el puerto", PORT)})

