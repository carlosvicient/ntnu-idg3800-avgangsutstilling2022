import * as React from "react"
import StudentCard from "./StudentCard"

// List of students
const StudentList = ({ students }) => {
  return (
    <div>
      {students.map(({ node }) => (
        <StudentCard node={node} />
      ))}
    </div>
  )
}

export default StudentList
