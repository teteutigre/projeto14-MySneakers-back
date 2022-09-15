import { db } from "../database/db.js";

export async function getProducts(req, res){
    try {
        const { brandFilter } = req.body;
        const products = db.collection("products").find();

        if(!products){
            res.status(404).send("Não há produtos cadastrados na loja!");
        } else if (products && !brandFilter) {
            res.send(products);
        } else if (products && brandFilter) {
            const filtedProducts = db.collection("products").find({ brand: brandFilter })
            
            if(!filtedProducts){
                res.status(404).send('Não há produtos da marca desejada');
            }
            
            res.send(filtedProducts);
        }

    } catch (error) {
        res.status(500).send('Servidor fora do ar! :(');
    }
}