"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Skeleton from "@mui/material/Skeleton";

const ContentEditorDataTable = ({ contentEditors }) => {
  const [filteredContentEditors, setFilteredContentEditors] =
    useState(contentEditors);
  const [search, setSearch] = useState("");
  const columns = [
    {
      name: "Keyword",
      selector: (row) => row.keyword,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "Country Code",
      selector: (row) => row.countryCode,
    },
  ];

  useEffect(() => {
    const result = contentEditors.filter((contentEditor) => {
      return (
        contentEditor.keyword.toLowerCase().includes(search.toLowerCase()) ||
        contentEditor.country.toLowerCase().includes(search.toLowerCase()) ||
        contentEditor.countryCode.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredContentEditors(result);
  }, [search]);
  return (
    <DataTable
      title="Keywords"
      columns={columns}
      data={filteredContentEditors}
      pagination
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="350px"
      subHeader
      subHeaderComponent={
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={search}
            className="rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link
            href="/editor/create"
            className={`bg-black text-white items-center rounded-md px-4 py-2.5 font-medium ml-3 hover:bg-opacity-90`}
          >
            Create Editor
          </Link>
        </div>
      }
    />
  );
};

export default ContentEditorDataTable;

export const ContentEditorDataTableLoader = () => {
  const columns = [
    {
      name: "Keyword",
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
      name: "Country",
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
      name: "Country Code",
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
      title="Keywords"
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      fixedHeader
      fixedHeaderScrollHeight="350px"
      subHeader
      subHeaderComponent={
        <div>
          <input
            type="text"
            placeholder="Search here"
            className="rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          <Link
            href="/editor/create"
            className={`bg-black text-white items-center rounded-md px-4 py-2.5 font-medium ml-3 hover:bg-opacity-90`}
          >
            Create Editor
          </Link>
        </div>
      }
    />
  );
};
