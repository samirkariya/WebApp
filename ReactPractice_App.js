// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <h1>Hello Wolrd</h1>
//   );
// }

// export default App;
// export default function App(){
//   var name="ABC";
//   // // x=10;
//   // console.log(x);
//   // let x=10;

//     // for(let i=1;i<5;i++){}
//     // console.log(i);
//     // const pi = 3.14
//     // console.log(pi);
//     // pi = 3.147;
//     // console.log(pi);
//     // const stud = {name:"Rohit",age:35};
//     // console.log(stud);
//     // stud.age=32;
//     // stud.name="sachin";
//     // stud.run=150;
//     // console.log(stud);
//     // stud = {name:"sachin",age:32};
//     // console.log(stud);
//   return(
//     <>
//       <h1>Hello {name}</h1>
//       <p>Wolrd</p>
//     </>
//   )
// }
// import { useState } from "react";
// const App = ()=>{
//     const [count,setCount]=useState(0);
//     const inc=()=>{
//         setCount(count+1);
//         console.log(count);
//     }
//   return(
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={inc}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//     </>
// )
// }
// const App = ()=>{
//   var  subject = ["PS","WT-II",".Net","Python","SE"];

//   return(
//   <>
//     <h1>4th Sem Subjects</h1>
//     <ol>
//       {subject.map((s,index)=><li key={index}>{s}</li>)}
//     </ol>
//   </>
//   )
// }
import faculties from './Data/faculty_data.json';
const App = ()=>{

  return(
  <>
    <h1>Faculty List</h1>
    {/* <ol>
      {faculties.map((f,i)=><li key={i}>{f.name}</li>)}
    </ol> */}
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {faculties.map((f,i)=>{
          return(<tr>
            <td>{f.id}</td>
            <td>{f.name}</td>
            <td>{f.department}</td>
            <td>{f.designation}</td>
            <td>{f.email}</td>
          </tr>)
        })}
      </tbody>
    </table>
  </>
  )
}
export default App;

