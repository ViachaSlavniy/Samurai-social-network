export type PaginatorProps = {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    portionSize: number;
    handleCurrentPage: (page: number) => void;
}
