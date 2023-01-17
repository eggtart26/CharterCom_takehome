import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

function RewardTable({ rewardsData }) {
  const columns = [
    {
      dataField: "id",
      sort: true,
      text: "Customer Id",
    },
    {
      dataField: "amount",
      sort: true,
      text: "Total Point Earned",
    },
  ];

  return (
    <div>
      {rewardsData === null ? (
        <div>Loading...</div>
      ) : (
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={rewardsData}
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

export default RewardTable;
