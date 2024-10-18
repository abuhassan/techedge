import Link from "next/link"
import Image from "next/image"

const categories = [
  { name: "Cookware", image: "/placeholder.svg?height=200&width=200" },
  { name: "Bakeware", image: "/placeholder.svg?height=200&width=200" },
  { name: "Cutlery", image: "/placeholder.svg?height=200&width=200" },
  { name: "Appliances", image: "/placeholder.svg?height=200&width=200" },
]

export default function CategoryHighlights() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name.toLowerCase()}`}
            className="group"
          >
            <div className="relative overflow-hidden rounded-lg aspect-square">
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}