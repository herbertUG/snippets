import React from 'react'

const SnippetCreatePage = () => {
  return (
    <form>
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
          <textarea
            className="border rounded-none p-2 w-full"
            name="code"
          />
        </div>
        <button type='submit' className='rounded p-2 bg-blue-200'>
          Create
        </button>
      </div>
    </form>
  );
}

export default SnippetCreatePage
