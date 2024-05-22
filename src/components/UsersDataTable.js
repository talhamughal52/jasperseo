"use client";
import DataTable from "react-data-table-component";
const UsersDataTable = ({ users }) => {
  const columns = [
    {
      name: "Name",
      selector: (row) => `${row.firstName} ${row.lastName}`,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={users}
      pagination
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="350px"
    />
  );
};

export default UsersDataTable;
