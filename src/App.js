import './App.css';
import React, {useState, useRef, createContext} from "react";

import Hello from "./Hello"


// create context createContext 
// Stor bokstav i början 
// det kan heta vad som helst 
const UserContext = createContext();


function App() {
 // const [number, setNumber] = useState(0) 
 const [color]= useState("red")

 //state
// const [state, setState]= useState("hej hej ")

 const refData = useRef(null)
//refData.current ==  <input type="text" ref={refData} />

// refData.current.vaule
// refData.current.focus()

// refData.current === null
function handleInput(){
    // refData.current.value = '';
    refData.current.focus();
}
  // life cycle metoder 
// useEffect(()=> {
//   document.body.style.background =color;
//   document.body.style.color="white";

//   //ändra den till async await 

//   // promises hell 
//   // callback hell 
// async function fetchData() {
// const res= await axios.get("https://randomuser.me/api/")
//   console.log(res.data.results[0])
// }

// fetchData();
// // Kl. 11.00 
// window.addEventListener("keydown", handleEnterButton)
 
//   // component will unmount
// return ()=> {
//  window.removeEventListener("keydown", handleEnterButton)
// }
// }, [color])


//unsubscribe delen 
/* function changeColor(){
  setColor("gold")
}
function handleEnterButton(e){

  //enter key
  if(e.keyCode===13){
    setColor("green")
  }

} */
  return (
    <div>
     {/*  <div> Hello </div>
      <button onClick={changeColor}>Change color</button> */}
      <form>
            <input type="text" ref={refData} />
            
            <button type="button" onClick={handleInput}> test</button>
      </form>
      
    


     < UserContext.Provider value={color}>
          Vår enga skapande komponent 
          <Hello/>
     </UserContext.Provider>
     
    </div>
  );


}

export default App;
export {UserContext}



//kl. 10.30 

//useContext with consumer
