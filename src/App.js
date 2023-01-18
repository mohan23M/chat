import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Chat from './pages/chat/chat';
import Login from './pages/login/Login'



function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/Chat' element={<Chat />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;