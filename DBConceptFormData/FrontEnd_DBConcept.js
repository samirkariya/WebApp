import { useEffect, useState } from "react";
function App() {
  const [students,setStudents] = useState([]);

  useEffect(()=>{
      const fetchData = async ()=>{
         const res = await fetch("http://localhost:5000/students")
         const data = await res.json();
         setStudents(data);
      }
      fetchData();
  },[])
  return (
  <div>
    <h2>Students List with Department Name</h2>
    <ol>
      {students && students.map(s=><li>
        {s._id} - {s.name} - {s.rollno} - {s.deptId?.deptName}
      </li>)}
    </ol>
  </div>    
  );
}

export default App;
