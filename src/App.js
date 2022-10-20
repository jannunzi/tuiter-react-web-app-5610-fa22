import Labs from "./labs";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import Nav from "./nav";

function App() {
  return(
    <BrowserRouter>
      <div className="container">
        <h1>WebDev Fall 2022</h1>
        <Nav/>
        <Routes>
          <Route path="/*" element={<Labs/>}/>
          <Route path="/hello" element={<h1>Hello</h1>}/>
          <Route path="/tuiter" element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
