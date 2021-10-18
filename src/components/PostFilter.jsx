import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostFilter({ filter, setFilter }) {
  return (
    <>
      <MyInput
        value={filter.query}
        placeholder="Searching..."
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sorting"
        options={[
          { value: 'title', name: "Name" },
          { value: 'body', name: "Description" }
        ]}
      />
    </>
  )
}
