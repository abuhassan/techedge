import Link from "next/link";

export default function PromotionalBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 px-4 sm:px-6 lg:px-8 rounded-lg my-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-2xl font-bold mb-2">Summer Sale Extravaganza!</h2>
          <p className="text-lg">
            Up to 50% off on selected items. Limited time offer.
          </p>
        </div>
        <Link
          href="/sale"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
