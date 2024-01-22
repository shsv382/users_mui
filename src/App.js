import './App.css';
import Users from './components/Users';
import Photos from './components/Photos';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div id="sidebar">
        {/* other elements */}

        <nav>
          <ul>
            <li>
              <Link to={`users`}>Users</Link>
            </li>
            <li>
              <Link to={`photos`}>Photos</Link>
            </li>
          </ul>
        </nav>

        {/* other elements */}
      </div>
    </>
  );
}

export default App;
