import "./index.css"
import Home from "./pages/home/Home";
import LogIn from "./pages/logIn/LogIn";
import NewUser from "./pages/new/newUser";
import NewProject from "./pages/new/NewProject";
import ProjectsList from "./pages/lists/ProjectsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarNav from "./components/navbar/BarNav";
import BarSide from "./components/barside/BarSide";

import UsersList from "./pages/lists/UsersList";
import SingleProject from "./pages/single/Single";
import EditProject from "./pages/edit/editProject";
import ContractorsList from "./pages/lists/contractorsList";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex">
          <div className='flex-[10] w-[20%] '>
            <BarSide />
          </div >
          <div className='w-full md:w-[80%]'>
            <BarNav />
            <div >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/users" element={<UsersList />} />
                <Route path="users/newUser" element={<NewUser />} />

                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/projects/newProject" element={<NewProject />} />
                <Route path="/projects/singleProject" element={<SingleProject />} />
                <Route path="/projects/editProject" element={<EditProject />} />

                <Route path="/contractors" element={<ContractorsList/>}/>
              </Routes>
              <ToastContainer theme="colored" />
            </div >
          </div >
        </div>
      </BrowserRouter >
    </div >
  );
}

export default App;
