import { db } from "../database/db.js";

export async function getProducts(req, res){
    try {
        const { brandFilter } = req.body;
        const products = await db.collection("products").find({}).toArray();

        if(!products){
            res.status(404).send("Não há produtos cadastrados na loja!");
        } else if (products && !brandFilter) {
            res.send(products);
        } else if (products && brandFilter) {
            const filtedProducts = await db.collection("products").find({ brand: brandFilter }).toArray();
            
            if(!filtedProducts){
                res.status(404).send('Não há produtos da marca desejada');
            }
            
            res.send(filtedProducts);
        }

    } catch (error) {
        res.status(500).send('Servidor fora do ar! :(');
    }
}