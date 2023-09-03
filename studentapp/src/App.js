import './App.css';
import { StyledEngineProvider } from "@mui/material/styles";
import Profile from "./components/Profile";
import BookPub from './components/BookPub';
import ProjectPub from './components/ProjectPub';
import Sidenavbar from './components/Sidenavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ThemeProvider } from '@mui/material';
function App() {
  return (
    <>
    <BrowserRouter>
    <StyledEngineProvider injectFirst>
    {/* <ThemeProvider> */}
      {/* <div className="App"> */}
        <Sidenavbar/>
        {/* <BookPub/> */}
      {/* </div> */}
    {/* </ThemeProvider> */}
    </StyledEngineProvider>
    <Routes>  
      {/* {<Route path='/' element={<Sidenavbar/>}/>} */}
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/bookPub' element={<BookPub/>}/>
      <Route path='/projectPub' element={<ProjectPub/>}/>
      {/* <Route path='/logOut' element={<LogoUT/>}/> */}
    </Routes>
    </BrowserRouter>
    </>

  );
}
export default App;