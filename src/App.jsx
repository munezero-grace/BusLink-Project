
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './component/routes'
// import './App.css'

import Home from './pages/home/home'


const App=()=>{
  const [count, setCount] = useState(0)
 
//   <Router>
// <Routes></Routes>
// </Router>
 
  return (
   <>
     <Home/> 
 
   </>
  )
}
 
export default App
