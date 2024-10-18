export default function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4 shadow-sm animate-pulse">
          <div className="bg-gray-300 w-full h-48 mb-4"></div>
          <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
          <div className="bg-gray-300 h-4 w-full mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="bg-gray-300 h-6 w-1/4"></div>
            <div className="bg-gray-300 h-10 w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
