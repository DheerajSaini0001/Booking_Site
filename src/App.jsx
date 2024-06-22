import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Component/Signin";
import PreviousMap from "postcss/lib/previous-map";
import Signup from "./Component/Signup";
import Signup1 from "./Component/Signup1";
import Bookingform from "./Component/Bookingform";

function App() {
  const [FormData,SetFormData]=useState({});
 
  return (
    <>
      <Router>
        <Routes>
       {/* <Route path="/signin" element={<Signin />} /> 
        <Route path="/signup" element={<Signup />} />  */}
          <Route path="/" element={<Bookingform/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
