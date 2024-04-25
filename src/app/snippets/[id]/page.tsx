import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import * as actions from "../../../actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async (props: SnippetShowPageProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  // const renderSnippet
  if (!snippet) {
    return notFound();
  }

  const snippetDeleteAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="py-2 px-4 border rounded"
          >
            Edit
          </Link>
          <form action={snippetDeleteAction}>
            <button className="py-2 px-5 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
