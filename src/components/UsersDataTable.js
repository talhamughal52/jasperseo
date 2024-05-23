"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const UsersDataTable = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [search, setSearch] = useState("");
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

  useEffect(() => {
    const result = users.filter((user) => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredUsers(result);
  }, [search]);

  return (
    <DataTable
      title="Users"
      columns={columns}
      data={filteredUsers}
      pagination
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="350px"
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search here"
          value={search}
          className="rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          onChange={(e) => setSearch(e.target.value)}
        />
      }
    />
  );
};

export default UsersDataTable;
