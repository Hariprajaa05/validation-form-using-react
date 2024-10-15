//make components like the Login and import it here thats it. 

/* Frontend (React) will fetch data from the Backend (Node.js + Express).
The Backend will interact with the Database (MongoDB) to get or store information.*/

import './App.css';
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';

function App() {
  return (
    <div>
      <Signup />
      <Login />
    </div>
  );
}

export default App;
