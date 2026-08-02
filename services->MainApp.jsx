import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import CVLHome from "./components/CVLHome";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";


function MainApp() {

  return (

    <BrowserRouter>

      <Routes>


        {/* Navbar wale normal pages */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<CVLHome />}
          />


          <Route
            path="/about"
            element={<About />}
          />


          <Route
            path="/contact"
            element={<Contact />}
          />

        </Route>



        {/* Dashboard page */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


      </Routes>


    </BrowserRouter>

  );

}


export default MainApp;
