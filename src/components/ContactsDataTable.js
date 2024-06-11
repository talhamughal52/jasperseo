"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Skeleton from "@mui/material/Skeleton";

export const ContactsDataTable = ({ contacts }) => {
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [search, setSearch] = useState("");
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
    },
    {
      name: "Message",
      selector: (row) => row.message,
    },
  ];

  useEffect(() => {
    const result = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.subject.toLowerCase().includes(search.toLowerCase()) ||
        contact.message.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredContacts(result);
  }, [search]);

  return (
    <DataTable
      title={
        <span className="text-title-md2  text-black dark:text-white py-4">
          Contacts
        </span>
      }
      columns={columns}
      data={filteredContacts}
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

export default ContactsDataTable;

export const ContactsDataTableLoader = () => {
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
      name: "Subject",
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
      name: "Message",
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
          Contacts
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
