import ReactDom from 'react-dom'
import App from './App'
import Resto from './Restaurant'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const rootElement = document.getElementById("#root");
ReactDom.render(
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<App/>} />
     <Route path="/restaurant" element={<Resto/>} />
   </Routes>
   </BrowserRouter>,
    document.querySelector("#root"))