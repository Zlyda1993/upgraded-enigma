import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {

  return (
    <>
    <header>
      <h1>Zachary Lyda</h1>
      <Nav />
    </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
