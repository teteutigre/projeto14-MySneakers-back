import { db } from "../database/db.js";

export async function getProducts(req, res) {
  try {
    const { brandFilter } = req.body;
    const products = [
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdkILmA__D-DrMYli9-cMTP-YVJdXnpK9f5W_veOyQCh4lTPn3AAyz3FIZgoBrF1aVO8&usqp=CAU",
        name: "Air Jordan 4 Fire Red 2020",
        brand: "Nike",
        price: "499.90",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQuno-ArrB0bxvW2yEIt2NoyuEfToJtRqBQ&usqp=CAU",
        name: "Aimé Leon Dore x New Balance 550",
        brand: "New Balance",
        price: "799.90",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnC9wAkUq5-jHAcAg5bjpSIhqtKTsfxBBKw&usqp=CAU",
        name: "Strangelove x Nike SB Dunk Low",
        brand: "Nike",
        price: "1099.90",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2El-_pozmkfYuthRZuEiO_QK5zREnJHypkwain723VCVV31dh37xuD4vW2jEl5x6TzrE&usqp=CAU",
        name: "Vans (Super COMFYCUSH Era)",
        brand: "Vans",
        price: "549.90",
      },
      {
        image_url:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.awsli.com.br%2F257%2F257889%2Fproduto%2F49479001%2F6119b5eccf.jpg&imgrefurl=https%3A%2F%2Fwww.shop-pineapple.co%2FNike-SB-Dunk-Low-Travis-Scott-Regular-Box&tbnid=H9KpiZub4NPMEM&vet=12ahUKEwiwxJqSzaH6AhVcgpUCHU7wBKgQMygBegUIARCQAQ..i&docid=EdgcLjPjon2daM&w=1080&h=720&q=nike%20sb%20dunk%20low%20travis%20scott&ved=2ahUKEwiwxJqSzaH6AhVcgpUCHU7wBKgQMygBegUIARCQAQ",
        name: "nike sb dunk low travis scott",
        brand: "Nike",
        price: "14280.90",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WhjDqsTIJe2358hlqfKeERxTNnmmBbo0Ww&usqp=CAU",
        name: "Nike Air Max 270 Retro",
        brand: "Nike",
        price: "199.90",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWF9a3gY0fgo6bYCskpP_i4MhYw6Aw2qaOGw&usqp=CAU",
        name: "Ivy Park x Adidas",
        brand: "Adidas",
        price: "1499.90",
      },
    ];

    if (!products) {
      res.status(404).send("Não há produtos cadastrados na loja!");
    } else if (products && !brandFilter) {
      res.send(products);
    } else if (products && brandFilter) {
      const filtedProducts = await db
        .collection("products")
        .find({ brand: brandFilter })
        .toArray();

      if (!filtedProducts) {
        res.status(404).send("Não há produtos da marca desejada");
      }

      res.send(filtedProducts);
    }
  } catch (error) {
    res.status(500).send("Servidor fora do ar! :(");
  }
}
