"use client";

import CountrySelect from "@/components/CountrySelect";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createEditor } from "@/lib/actions/editor.actions";
import { toast } from "react-toastify";

const ContentEditorForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (event) => {
    setIsLoading(true);
    setTimeout(async () => {
      await createEditor(event);
      toast.success("keyword is in queue. It can take upto 5min");
      router.push("/editor");
    }, 500);
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);
  return (
    <>
      <div className="row titlerow">
        <div className="col s12">
          <h2 className="text-title-md2 font-semibold text-black dark:text-white py-4">
            Content Editor
          </h2>
          <p>Get SEO guidelines for your next awesome page.</p>
          <p>
            Plan, research, create and optimize easily, without opening multiple
            tabs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1 py-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action={handleSubmit} method="get">
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Keyword
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Keyword"
                    name="keyword"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="flex gap-5.5 p-6.5 row">
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Region
                  </label>
                  <CountrySelect />
                </div>
                <div
                  className="w-full flex"
                  style={{ justifyContent: "end", alignItems: "end" }}
                >
                  <div className="flex justify-center rounded bg-black font-medium text-white hover:bg-opacity-90">
                    {isLoading ? (
                      <div
                        className="flex p-3 justify-center"
                        style={{ alignItems: "center" }}
                      >
                        <CircularProgress
                          style={{
                            color: "white",
                            width: "24px",
                            height: "24px",
                            margin: "0 36px",
                          }}
                        />
                      </div>
                    ) : (
                      <>
                        <button className="p-3">Create Editor</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentEditorForm;
