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

