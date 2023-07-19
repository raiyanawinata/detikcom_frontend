import { Routes } from "react-router-dom";
import HeaderNav from "../components/header/HeaderNav";
import BasePage from "./BasePage";

export default function AppRoute(){
    return(
        <Routes>
            <BasePage/>
        </Routes>
    )
}