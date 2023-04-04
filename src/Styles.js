import {Title} from "./Component"
import Bootstrap from './Bootstrap';
//import Tailwind from './Tailwind'
import './style.scss'
import styles from './App.module.css'

function Styles(){
    <div className={styles.App}>
    <p>{process.env.REACT_APP_API_URL}</p>
    <p className='env'>test</p>
    <Title>{process.env.NODE_ENV}</Title>
    <Title theme={"dark"}>{process.env.NODE_ENV}</Title>
  <img src="/logo192.png" alt=""/>
  <Bootstrap></Bootstrap>
  
  </div>
}

export default Styles