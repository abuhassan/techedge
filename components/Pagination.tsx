import Link from "next/link";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  const createPageUrl = (page: number) => `${baseUrl}?page=${page}`;

  return (
    <nav className="flex justify-center items-center space-x-2 my-8">
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Previous
        </Link>
      )}

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <Link
            key={page}
            href={createPageUrl(page)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              currentPage === page
                ? "text-white bg-blue-600 hover:bg-blue-700"
                : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </Link>
        );
      })}

      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Next
        </Link>
      )}
    </nav>
  );
}
