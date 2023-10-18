import "./App.css";
import { Login } from "./components/Login/Login";
import { Panel } from "./components/Panel/Panel";
import { Signout } from "./components/Signout/Signout";

function App() {
  
  return (
    <div className="App">
      <Login />
      <Signout />
      <Panel />
    </div>
  )
}

export default App;
