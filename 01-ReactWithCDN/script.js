const rootElement = document.getElementById("root");

console.log(rootElement);

// React create Element Method (type,props,children)

// const newEl = React.createElement("h1",null,"Hello Wolrd");
const newEl = React.createElement("h1",{style:{color:'red'} },"Hello Wolrd");

console.log(newEl);

// ReactDom createRoot Method (container,method)
// render Method (Element)

// ReactDOM.createRoot(rootElement).render(newEl)


// function

function para(){
    return React.createElement("h2",null,"inserted with Funtion");
}

// ReactDOM.createRoot(rootElement).render(para())


// Using JSX
    // Component name Start using Capital Later for <ComponentName/>
function HelloWorld(){
    return <h1>Hello World</h1>
}

// ReactDOM.createRoot(rootElement).render(<HelloWorld/>)
// ReactDOM.createRoot(rootElement).render(HelloWorld)
ReactDOM.createRoot(rootElement).render(HelloWorld())

// things to Remember

    // - react, reactDOM
    // - JSX (babel convert jsx to actual react code)
    // JSX function return only single tag/Element , inside that tage can be multiple tags of element
