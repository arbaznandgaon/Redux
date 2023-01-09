import './App.css';
import { createContext, useState , useContext} from 'react';


const Envelop= createContext();

function C1(){
  return <div>
    <C2/>
    <h2>!!!</h2>
  </div>
}

function C2(){
  return <div>
      <C3/>
        <h2>!!!</h2>

  </div>
}
function C3(){
  return <div>
      <C4/>
        <h2>!!!</h2>

  </div>
}
function C4(){
  const [val ] = useContext(Envelop);
  
  return <div>
    <h2>Hi again {val.name} {val.Age} </h2>
  </div>
}



function App() {
  const [val,setVal]= useState({
    name: "Arbaz",
    Age: "23"
  })


  return (

   <Envelop.Provider value={[val]}>
     <div className="App">
      
      <h1>Hey</h1>
      <C1/>
    </div>
   </Envelop.Provider>
  );
}

export default App;

// import { useState ,createContext ,useContext } from "react"

// const Env = createContext () ;

// function C1(){
//   return <div>
//     <h1>C1</h1>
//     <C2  />
//   </div>
// }
// function C2(){
//   return <div>
//       <h1>C2</h1>
//       <C3  />
//   </div>
// }
// function C3(){
//   return <div>
//       <h1>C3</h1>
//       <C4  />
//   </div>
// }

// function C4(){
//   const [va ,va2] = useContext(Env);
  
//   return <div>
//     {/* hi again {va} */}
//     <p>hi again {va} {va2}</p>
//   </div>
// }

// function App() {
//   const [va ,setVa] = useState("Anmol")
//   const [va2 ,setVa2] = useState("Raj")
//   return (
//     <Env.Provider value={[va ,va2]} >
//       <div className="App">
//           <h1>Hello {va}</h1>
//           <C1 />
//         </div>
//     </Env.Provider>
//   );
// }

// export default App;