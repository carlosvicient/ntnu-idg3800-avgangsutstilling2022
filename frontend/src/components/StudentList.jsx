import React, { useEffect, useState } from "react";

// Components
import StudentCard from "./StudentCard";

// List of students
const StudentList = ({ students, withSorting, studyprogramme }) => {
  const [sorting, setSorting] = useState(true);

  const sortDesc = (x, y) => {
    if (x.node.name < y.node.name) return -1;
    return 0;
  }

  const sortAsc = (x, y) => {
    if (x.node.name > y.node.name) return -1;
    return 0;
  }

  useEffect(() => {
    students.sort(sortAsc);
  }, [students]);

  const handleClick = () => {
    setSorting(!sorting);
    if (sorting) students.sort(sortAsc);
    if (!sorting) students.sort(sortDesc);
  }

  return (
    <div>
      <h2>Studenter {studyprogramme && `– ${studyprogramme}`}</h2>
      {withSorting && (
        <button aria-label="sorter" onClick={() => handleClick()}>
          {sorting ? "a - z" : "z - a"}
        </button>
      )}
      {students.map(({ node }) => (
        <StudentCard key={node.id} node={node} />
      ))}
    </div>
  )
}

export default StudentList;
