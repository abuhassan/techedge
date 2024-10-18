import Link from 'next/link'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  return (
    <div className="flex justify-center space-x-2">
      {currentPage > 1 && (
        <Link href={`/products?page=${currentPage - 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
          Previous
        </Link>
      )}
      <span className="px-4 py-2 bg-gray-200 rounded">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link href={`/products?page=${currentPage + 1}`} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </Link>
      )}
    </div>
  )
}