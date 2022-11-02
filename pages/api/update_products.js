const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require("fs");


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const items = req.body.cartItem

    const fileData = fs.readFileSync("../../data.json", "utf8")
    const jsonData = JSON.parse(fileData)

    try {
      // Get Prices List.
      const prices = await stripe.prices.list({
        limit: 3,
      });

      // Get Products List
      const products = await stripe.products.list({
        limit: 3,
      });
      //update only first for now
        jsonData[0].id = prices.data[0].id;
        jsonData[0].price = prices.unit_amount / 100;

        fs.writeFile("./serverStatus.json", JSON.stringify(jsonData))

      res.json(prices.data)
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}