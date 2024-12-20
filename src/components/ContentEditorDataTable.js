"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Skeleton from "@mui/material/Skeleton";

const ContentEditorDataTable = ({ contentEditors, admin }) => {
  const [filteredContentEditors, setFilteredContentEditors] =
    useState(contentEditors);
  const [search, setSearch] = useState("");
  let columns = null;
  if (admin) {
    columns = [
      {
        name: "Keyword",
        selector: (row) => (
          <Link href={`/editor/${row._id}/loading`}>{row.keyword}</Link>
        ),
      },
      {
        name: "User",
        selector: (row) => row.user.username,
      },
      {
        name: "Country",
        selector: (row) => row.country,
      },
      {
        name: "Country Code",
        selector: (row) => row.countryCode,
      },
      {
        name: "Status",
        selector: (row) => row.status,
      },
    ];
  } else {
    columns = [
      {
        name: "Keyword",
        selector: (row) => (
          <Link href={`/editor/${row._id}/loading`}>{row.keyword}</Link>
        ),
      },
      {
        name: "Country",
        selector: (row) => row.country,
      },
      {
        name: "Country Code",
        selector: (row) => row.countryCode,
      },
      {
        name: "Status",
        selector: (row) => row.status,
      },
    ];
  }

  useEffect(() => {
    let result = null;
    if (admin) {
      result = contentEditors.filter((contentEditor) => {
        return (
          contentEditor.keyword.toLowerCase().includes(search.toLowerCase()) ||
          contentEditor.country.toLowerCase().includes(search.toLowerCase()) ||
          contentEditor.status.toLowerCase().includes(search.toLowerCase()) ||
          contentEditor.user.username
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          contentEditor.countryCode.toLowerCase().includes(search.toLowerCase())
        );
      });
    } else {
      result = contentEditors.filter((contentEditor) => {
        return (
          contentEditor.keyword.toLowerCase().includes(search.toLowerCase()) ||
          contentEditor.country.toLowerCase().includes(search.toLowerCase()) ||
          contentEditor.status.toLowerCase().includes(search.toLowerCase()) ||
          contentEditor.countryCode.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    setFilteredContentEditors(result);
  }, [search]);
  return (
    <DataTable
      title={
        <span className="text-title-md2  text-black dark:text-white py-4">
          Keywords
        </span>
      }
      noDataComponent={
        <div style={{ padding: "24px" }} className="text-black dark:text-white">
          There are no records to display
        </div>
      }
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
          {!admin && (
            <Link
              href="/editor/create"
              className={`bg-black text-white items-center rounded-md px-4 py-2.5 font-medium ml-3 hover:bg-opacity-90`}
            >
              Create Editor
            </Link>
          )}
        </div>
      }
    />
  );
};

export default ContentEditorDataTable;

export const ContentEditorDataTableLoader = ({ admin = false }) => {
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
    {
      name: "Status",
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
          Keywords
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
        <div>
          <input
            type="text"
            placeholder="Search here"
            className="rounded-lg border-[1.5px] border-stroke bg-transparent px-4 py-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
          {!admin && (
            <Link
              href="/editor/create"
              className={`bg-black text-white items-center rounded-md px-4 py-2.5 font-medium ml-3 hover:bg-opacity-90`}
            >
              Create Editor
            </Link>
          )}
        </div>
      }
    />
  );
};
