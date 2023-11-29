import { color, fontSize } from "@mui/system";
import Greeting2 from "./components/Greeting2";
import Greetings from "./components/Greetings";


function App() {
  const userName = ["adarsh","yatin","manav"];
  return (
    <>
      <h1 style={{ backgroundColor: 'green', color: 'white' }}>Props Basic</h1>
      <Greetings name="Adarsh" lastName="Rangare" user ={userName}/>
      <Greetings name="Yatin" lastName = "Choudhary"/>
      <Greetings name="Manav" lastName="Deshmukh" age={24}/>
      
      {/* numbers and Varriable are passed in props with curly braces 
      Props is Object
      */}

<h1 style={{ backgroundColor: 'green', color: 'white' }}>
  Props Children
  </h1>

     <Greeting2/>
     <Greeting2> <h2> Hi there </h2> </Greeting2> 
     {/* Childrens are passed inside opening and closing tags */}


    </>
  )
}

export default App
