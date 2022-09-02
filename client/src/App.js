import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";

import AddEditam from "./pages/AddEditam";
import Homeam from "./pages/Homeam";
import Viewam from "./pages/Viewam";

import AddEditas from "./pages/AddEditas";
import Homeas from "./pages/Homeas";
import Viewas from "./pages/Viewas";

import AddEditco from "./pages/AddEditco";
import Homeco from "./pages/Homeco";
import Viewco from "./pages/Viewco";

import AddEditev from "./pages/AddEditev";
import Homeev from "./pages/Homeev";
import Viewev from "./pages/Viewev";

import AddEditex from "./pages/AddEditex";
import Homeex from "./pages/Homeex";
import Viewex from "./pages/Viewex";

import AddEditre from "./pages/AddEditre";
import Homere from "./pages/Homere";
import Viewre from "./pages/Viewre";

import AddEditsc from "./pages/AddEditsc";
import Homesc from "./pages/Homesc";
import Viewsc from "./pages/Viewsc";

import AddEditar from "./pages/AddEditar";
import Homear from "./pages/Homear";
import Viewar from "./pages/Viewar";

import Landing from "./pages/Landing";

function App() {
  return(
    <BrowserRouter> 
      <div className="App"> 
        <ToastContainer positon="top-center"/>
        <Routes>
          
        
        <Route exact path="/" element={<Landing />}/>
        <Route exact path="/Home" element={<Home />}/>
        <Route path="/addNews" element={<AddEdit />}/>
        <Route path="/update/:id" element={<AddEdit />}/>
        <Route path="/view/:id" element={<View />}/>

        <Route path="/Homeam" element={<Homeam />}/>
        <Route path="/addAManager" element={<AddEditam />}/>
        <Route path="/updateam/:id" element={<AddEditam />}/>
        <Route path="/viewam/:id" element={<Viewam />}/>

        <Route path="/Homeas" element={<Homeas />}/>
        <Route path="/addAsst" element={<AddEditas />}/>
        <Route path="/updateas/:id" element={<AddEditas />}/>
        <Route path="/viewas/:id" element={<Viewas />}/>

         <Route path="/Homeco" element={<Homeco />}/>
        <Route path="/addCont" element={<AddEditco />}/>
        <Route path="/updateco/:id" element={<AddEditco />}/>
        <Route path="/viewco/:id" element={<Viewco />}/>

        <Route path="/Homeev" element={<Homeev />}/>
        <Route path="/addEvent" element={<AddEditev />}/>
        <Route path="/updateev/:id" element={<AddEditev />}/>
        <Route path="/viewev/:id" element={<Viewev />}/>

        <Route path="/Homeex" element={<Homeex />}/>
        <Route path="/addExpense" element={<AddEditex />}/>
        <Route path="/updateex/:id" element={<AddEditex />}/>
        <Route path="/viewex/:id" element={<Viewex />}/>

        <Route path="/Homere" element={<Homere />}/>
        <Route path="/addRec" element={<AddEditre />}/>
        <Route path="/updatere/:id" element={<AddEditre />}/>
        <Route path="/viewre/:id" element={<Viewre />}/>

        <Route path="/Homesc" element={<Homesc />}/>
        <Route path="/addSch" element={<AddEditsc />}/>
        <Route path="/updatesc/:id" element={<AddEditsc />}/>
        <Route path="/viewsc/:id" element={<Viewsc />}/>

        <Route path="/Homear" element={<Homear />}/>
        <Route path="/addArt" element={<AddEditar />}/>
        <Route path="/updatear/:id" element={<AddEditar />}/>
        <Route path="/viewar/:id" element={<Viewar />}/>


        </Routes>
      </div> 
    </BrowserRouter> 
    );
}

export default App;

