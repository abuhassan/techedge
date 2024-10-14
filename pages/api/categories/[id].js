export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json({
    id,
    name: `Category ${id}`,
    description: `This is category ${id}`,
    imageUrl: `https://picsum.photos/seed/${id}/300/200`,
  });
}
