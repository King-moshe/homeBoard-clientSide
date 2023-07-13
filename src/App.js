import "./index.css"
import Home from "./pages/home/Home";
import NewUser from "./pages/new/newUser";
import UsersList from "./pages/lists/UsersList";
import NewProject from "./pages/new/NewProject";
import ProjectsList from "./pages/lists/ProjectsList";
import EditProject from "./pages/edit/editProject"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BarSide from "./components/barside/BarSide";
import BarNav from "./components/navbar/BarNav";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import OurWork from "./pages/home/OurWork";
import Main from "./pages/home/Main";
import { useStateContext } from "./context";
import Landing from "./pages/home/Landing";
import { apiGet } from "./services/apiServices";
import { USER_INFO } from "./constant/url";
import Contact from "./pages/home/Contact";
import ContractorsList from "./pages/lists/contractorList";
import ProjectCard from "./pages/cards/ProjectsCards";
import SingleClient from "./pages/single/SingleClient";
import UserInfo from "./pages/single/UserInfo";
import Login from "./pages/logIn/LogIn";
import MissionList from "./pages/lists/MissionList";
import NewMission from "./pages/new/NewMission";
import MissionUser from "./pages/single/MissionUser";
import UserMissionList from "./user/UserMissionList";



function App() {
  const API_KEY = "token";
  const { currentMode, setUser, login, setLogin } = useStateContext();


  useEffect(() => {    
    checkIfUserConnect();
  }, []);

  const checkIfUserConnect = async () => {
    try {
      let token = localStorage[API_KEY];
      if (token) {
        let resp = await apiGet(USER_INFO);
        // console.log(resp);
        setUser(resp);
        if (resp.role === 'Admin') {
          setLogin(2);
        }
        else if (resp.role === 'User') {
          setLogin(3);
        }
      }
      else
        setLogin(1);
    }
    catch (error) {
      setLogin(1);
      console.log(error);
    }
  };

  return (
      <div className={currentMode === 'dark' ? 'dark' : 'light'}>
        <BrowserRouter>
          {login === 0 &&
            <div className='w-full h-[100vh] bg-white dark:bg-secondary'>
              <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 '>
                <div className={` border-t-transparent border-solid animate-spin border-[var(--current-color)] rounded-full border-8 h-64 w-64`}></div>
                Loading...
              </div>
            </div>
          }
          {login === 1 &&
            <Routes  >
              <Route path="/*" element={<Landing />} />
              <Route path="/about" element={<Main />} />
              <Route path="/ourwork" element={<OurWork />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          }
          {login === 2 &&
            <>
              <div className="flex">
                <div className='flex-[10] w-[20%] '>
                  <BarSide />
                </div >
                <div className='w-full md:w-[80%]'>
                  <BarNav />
                  <div >
                    <Routes>
                      <Route path="/*" element={<Home />} />
                      <Route path="/userProfile" element={<UserInfo />} />
                      <Route path="/users" element={<UsersList />} />                     
                      <Route path="/users/newUser" element={<NewUser />} />

                      <Route path="/missions" element={<MissionList/>}/>
                      <Route path="/missions/newMission" element={<NewMission/>}/>
                      <Route path="/missions/missionUser/:id" element={<MissionUser/>}/>

                      <Route path="/projects" element={<ProjectsList />} />
                      <Route path="/projects/newProject" element={<NewProject />} />
                      <Route path="/projects/editProject/:id" element={<EditProject />} />
                      <Route path="/projects/singleProject" element={<ProjectCard />} />
                      <Route path="/projects/singleClient" element={<SingleClient />} />

                      <Route path="/contractors" element={<ContractorsList />} />
                    </Routes>
                  </div >
                </div >
              </div> 
            </>
          }
          {login === 3 &&
            <>
              <div className="flex">
                <div className='flex-[10] w-[20%] '>
                  <BarSide />
                </div>
                <div className='w-full md:w-[80%]'>
                  <BarNav />
                  <div>
                    <Routes>
                    <Route path="/*" element={<Home />} />
                    <Route path="/userProfile" element={<UserInfo />} />
                    <Route path="/contractors" element={<ContractorsList />} />

                    <Route path="/userMission" element={<UserMissionList />} />

                    </Routes>
                  </div>
                </div>
              </div>
            </>
          }


          <ToastContainer theme="colored" />
        </BrowserRouter >
      </div >

  );
}

export default App;









