
const StateDemo1 = () => {
    let name = "Adarsh";
    function handleClick(){
        console.log("Clicked");
        name = name=="Adarsh" ? "Rangare" : "Adarsh";
        console.log(name);
    }

    // By changing the Varriable Value {name} it won't render in UI
    // to change in UI have to use Hooks ig useState

  return <>
        <h2>{name}</h2>
        <button 
        onClick={()=>{
            handleClick();
        }}
        >Change Name</button>
  </>;
};

export default StateDemo1;