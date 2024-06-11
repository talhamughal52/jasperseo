"use client";
import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const BillingDetailsDataTable = ({ allUsersBillingDetial }) => {
  const [filteredAllUsersBillingDetial, setFilteredAllUsersBillingDetial] =
    useState(allUsersBillingDetial);
  const [search, setSearch] = useState("");

  const columns = [
    {
      name: "Username",
      selector: (row) => row.user.username,
    },
    {
      name: "Email",
      selector: (row) => row.user.email,
    },
    {
      name: "Plan Name",
      selector: (row) => row.planName,
    },
    {
      name: "Total Editors",
      selector: (row) => parseInt(row.totalEditors) + parseInt(row.usedEditors),
    },
    {
      name: "Used Editors",
      selector: (row) => row.usedEditors,
    },
    {
      name: "Available Editors",
      selector: (row) => row.totalEditors,
    },
  ];

  useEffect(() => {
    const result = allUsersBillingDetial.filter((item) => {
      return (
        item.planName.toLowerCase().includes(search.toLowerCase()) ||
        item.user.username.toLowerCase().includes(search.toLowerCase()) ||
        item.user.email.toLowerCase().includes(search.toLowerCase()) ||
        `${parseInt(item.totalEditors) + parseInt(item.usedEditors)}`
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.usedEditors
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.totalEditors
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    setFilteredAllUsersBillingDetial(result);
  }, [search]);

  return (
    <DataTable
      title={
        <span className="text-title-md2  text-black dark:text-white py-4">
          Users Billing Details
        </span>
      }
      columns={columns}
      data={filteredAllUsersBillingDetial}
      pagination
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="350px"
      subHeader
      subHeaderComponent={
        <div className="py-8">
          <input
            type="text"
            placeholder="Search here"
            value={search}
            className="rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      }
    />
  );
};

export default BillingDetailsDataTable;

export const BillingDetailsDataTableLoader = () => {
  const columns = [
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
    {
      name: "Plan Name",
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
      name: "Total Editors",
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
      name: "Used Editors",
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
      name: "Available Editors",
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
          Users Billing Details
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
        <div className="py-8">
          <input
            type="text"
            placeholder="Search here"
            className="rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      }
    />
  );
};
