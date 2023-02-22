import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Homepage/Homepage'
import ResultPool from './Homepage/result-pool/ResultPool'
import RecipeInstruction from "./Homepage/result-pool/recipe-instruction/RecipeInstruction"
import Error from "./Homepage/error/Error"


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/ResultPool' element={<ResultPool />} />
            <Route path='/Instruction' element={<RecipeInstruction />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>    
  );
}

