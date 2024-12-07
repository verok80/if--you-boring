import image from './4002676.jpg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

const [advice, setAdvice] = useState("");

useEffect(() => {
getAdvice();
}, [])

const getAdvice = async () => {
const response = await fetch(` https://bored.api.lewagon.com/api/activity  `);
const data = await response.json();
console.log(data.activity);
setAdvice(data.activity)
}



return (

<div className="App">
  <img src={image} alt="Leaves"/>
<div className='container'>
<p> {advice} </p>
</div>
<div className='container'>
<button onClick={getAdvice}>New Advice</button>
</div>



</div>

);

}
export default App;