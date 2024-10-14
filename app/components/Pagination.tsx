import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  createPageUrl: (page: number) => string;
}

export default function Pagination({
  currentPage,
  totalPages,
  createPageUrl,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Link href={createPageUrl(currentPage - 1)} passHref>
        <Button disabled={currentPage === 1} variant="outline">
          Previous
        </Button>
      </Link>
      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>
      <Link href={createPageUrl(currentPage + 1)} passHref>
        <Button disabled={currentPage === totalPages} variant="outline">
          Next
        </Button>
      </Link>
    </div>
  );
}
