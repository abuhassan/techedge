export default function handler(req, res) {
  const { category, page = 1, limit = 9 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + Number(limit);

  const totalProducts = 50; // Simulating a total of 50 products per category
  const products = Array.from({ length: totalProducts }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: `This is product ${i + 1} in category ${category}`,
    price: Math.floor(Math.random() * 100) + 1,
    imageUrl: `https://picsum.photos/seed/${category}-${i + 1}/300/200`,
  }));

  res.status(200).json({
    products: products.slice(startIndex, endIndex),
    total: totalProducts,
  });
}
