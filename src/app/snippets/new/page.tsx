"use client"

import * as actions from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(actions.createSnippet, { message: "" });

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            // type="text"
            className="border rounded-none p-2 w-full"
            name="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea className="border rounded-none p-2 w-full" name="code" />
        </div>
        {
          formState.message ? <div className="my-2 p-2 font-semibold text-red-500">{formState.message}</div>:null
        }
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};

export default SnippetCreatePage;
