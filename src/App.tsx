import './App.css';
import bitoviLogo from "@assets/bitovi-logo.svg";
import { NavLink, Outlet } from 'react-router-dom';
import "@fontsource/inter"; // Defaults to weight 400

function App() {

  return (
    <div className="app">
      <header className="header">
        <div>
          <a href="https://bitovi.com" target="_blank">
            <img src={bitoviLogo} className="logo" alt="Bitovi logo" />
          </a>
        </div>
        <h1>Vehicle Information</h1>
      </header>
      <main>
        <nav className="main-nav">
          <NavLink
            className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
            to="/use-state-simple"
          >
            useState
          </NavLink>
          <NavLink
            className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
            to="/use-state-use-effect"
          >
            useState w/Effects
          </NavLink>
          <NavLink
            className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
            to="/use-state-better"
          >
            useState Advanced
          </NavLink>
          <NavLink
            className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
            to="/use-state-custom-hook"
          >
            useState Custom Hook
          </NavLink>
          <NavLink
            className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
            to="/use-reducer"
          >
            useReducer
          </NavLink>
          <NavLink
            className={({ isActive }) => `button ${isActive ? 'active' : ''}`}
            to="/url-query-params"
          >
            URL Params
          </NavLink>
        </nav>
        <Outlet />
      </main>
    </div>
  )
}

export default App
