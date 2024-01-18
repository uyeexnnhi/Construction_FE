import { useSelector, useDispatch } from "react-redux";
import {
  useLocation,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import {
 
  Sidebar,
  Userbar

} from "./components";
import {
Overview


} from "./pages";
// import AddAppointmentForm from "./pages/AddAppointmentForm";


const App = () => {

 
  return (
    <div className="flex h-screen">
    <Sidebar />

     
    <div className="flex-1 flex flex-col">
       <Userbar />
     
          <div className="px-4 bg-gray-100 flex-1 h-fit">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/home" element={<Overview />} />
            </Routes>
          </div>
        
        </div>
    

     
    </div>
  );
};

export default App;