import React, { useEffect, useState } from "react";
import * as styles from "../styles/studentlist.module.css"
import { AiOutlineSortAscending, AiOutlineSortDescending } from "react-icons/ai"

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
      <div className={styles.sortHead}>
        <h3>Studenter {studyprogramme && `– ${studyprogramme}`}</h3>
        {withSorting && (
          <button className={styles.button} aria-label="sorter" onClick={() => handleClick()}>
            {sorting ? <AiOutlineSortAscending /> : <AiOutlineSortDescending />}
          </button>
        )}
      </div>
      <div className={styles.studentGrid}>
        {students.map(({ node }) => (
          <StudentCard key={node.id} node={node} />
        ))}
      </div>
    </div>
  )
}

export default StudentList;
