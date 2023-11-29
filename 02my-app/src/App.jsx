import LoginForm from './components/LoginForm';
import './index.css';

import styles from './styleCSS1.module.css'
import stylesFrom2 from './styleCSS2.module.css'

function App() {
  return <>
    <LoginForm/>
    <h1 className={styles.container}>Style Checker1</h1>
    <h1 className={stylesFrom2.container}>Style Checker2</h1>
  </>;
}

export default App;

// export default can be used only once for one function
// with export default we can take any name of function during import