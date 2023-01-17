import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function TransactionTable({ transactionData }) {
  const columns = [
    {
      dataField: "cusid",
      sort: true,
      text: "Customer Id",
    },
    {
      dataField: "transactionDate",
      sort: true,
      text: "Date",
    },
    {
      dataField: "amount",
      sort: true,
      text: "Amount",
    },
  ];

  return (
    <div>
      {transactionData === null ? (
        <div>Loading...</div>
      ) : (
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={transactionData}
          columns={columns}
          pagination={paginationFactory({
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true,
          })}
        >
          {(props) => (
            <React.Fragment>
              <BootstrapTable {...props.baseProps} />
            </React.Fragment>
          )}
        </BootstrapTable>
      )}
    </div>
  );
}

export default TransactionTable;
