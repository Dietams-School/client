import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import './styles/home.css'
import './styles/sidebar.css'
import StudentReg from "./pages/StudentReg";

function App() {
  return (
    <div className="app">
      <div className="app-container">
        <SideBar />
        <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/student/register" element={<StudentReg />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
