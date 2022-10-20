import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Route, Routes} from "react-router";

function Labs() {
  return(
    <div>
      <Routes>
        <Route index element={<Assignment6/>}/>
        <Route path="/a7" element={<Assignment7/>}/>
      </Routes>
    </div>
  )
}
export default Labs;