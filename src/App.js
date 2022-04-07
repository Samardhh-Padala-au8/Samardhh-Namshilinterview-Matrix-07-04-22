import React,{useState} from 'react';
import './App.css';
let bluearray = []
function App() {
  const n = 4;
  const [dum,setDum] = useState([])
  const handleColor=(ele)=>{
    bluearray.push(ele)
    if(bluearray.length>2){
      bluearray.shift();
    }
    setDum([...bluearray])
  }
  
  return (
    <div className="App" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <h2>Color Game</h2>
      <table style={{width:'500px'}}>
        <tbody>
      {[...Array(n)].map((e, i) => <tr key={i} style={{height:'30px'}}>
        {[...Array(n)].map((e, j) => <td key={j.toString()+i.toString()} style={{background:dum.includes(j.toString()+i.toString())?'red':'blue'}} onClick={()=>handleColor(j.toString()+i.toString())}></td>)}
      </tr>)}
      </tbody>
      </table>
    </div>
  );
}

export default App;
