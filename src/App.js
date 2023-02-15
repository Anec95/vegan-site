import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Homepage/Homepage'
import ResultPool from './Homepage/result-pool/ResultPool'
import Appetizer from "./Homepage/secondary-page/Appetizer"



export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/ResultPool' element={<ResultPool />} component={Appetizer} />
        </Routes>
    </BrowserRouter>    
  );
}

