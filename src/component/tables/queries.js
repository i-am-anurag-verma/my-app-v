import { PER_PAGE } from "./constants";

export function  getTotalPageCount(noOfRecord, perPage=PER_PAGE) {
    if (perPage === 0 || noOfRecord === 0) {
      return 1;
    }
    const pageSize = Math.ceil(noOfRecord / perPage);
    return pageSize;
  }
  
  export function getPageRecords(records, currentPage, perPage=PER_PAGE) {
    const from = (currentPage - 1) * perPage;
    const to = from + perPage;
    return records.slice(from, to);
  }