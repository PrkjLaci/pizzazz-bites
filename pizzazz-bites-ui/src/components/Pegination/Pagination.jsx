import React from "react";
import { useEffect } from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Pagination.css";

const Pagination = ({ page, setPage, pizzaCount }) => {
  const handleDisablePrevious = () => {
    return page === 1 ? { disabled: true } : {};
  };

  const hadnleDisableNext = () => {
    return page === Math.ceil(pizzaCount / 10) ? { disabled: true } : {};
  };

  useEffect(() => {
    handleDisablePrevious();
    hadnleDisableNext();
  }, [page]);

  return (
    <MDBPagination className="mb-0">
      <MDBPaginationItem {...handleDisablePrevious()}>
        <MDBPaginationLink onClick={() => setPage(page--)}>
          <span aria-hidden="true">«</span>
        </MDBPaginationLink>
      </MDBPaginationItem>
      {[...Array(Math.ceil(pizzaCount / 10))].map((_, index) => (
        <MDBPaginationItem key={index} active={index + 1 === page}>
          <MDBPaginationLink onClick={() => setPage(index + 1)} href="#">
            {index + 1}
          </MDBPaginationLink>
        </MDBPaginationItem>
      ))}
      <MDBPaginationItem {...hadnleDisableNext()}>
        <MDBPaginationLink onClick={() => setPage(page++)} href="#">
          <span aria-hidden="true">»</span>
        </MDBPaginationLink>
      </MDBPaginationItem>
    </MDBPagination>
  );
};

export default Pagination;
