"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Skeleton from "@mui/material/Skeleton";

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
      return (
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        `${user.firstName} ${user.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredUsers(result);
  }, [search]);

  return (
    <DataTable
      title={
        <span className="text-title-md2  text-black dark:text-white py-4">
          Users
        </span>
      }
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

export const UsersDataTableLoader = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={210}
          height={40}
        />
      ),
    },
    {
      name: "Username",
      selector: (row) => (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={210}
          height={40}
        />
      ),
    },
    {
      name: "Email",
      selector: (row) => (
        <Skeleton
          variant="rectangular"
          animation="wave"
          width={210}
          height={40}
        />
      ),
    },
  ];
  const data = [{}, {}, {}, {}, {}, {}];

  return (
    <DataTable
      title={
        <span className="text-title-md2  text-black dark:text-white py-4">
          Users
        </span>
      }
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="350px"
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search here"
          className="rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
        />
      }
    />
  );
};
