import './AppWrapper.scss'
import { Outlet } from "react-router-dom";
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";

const AppWrapper = () => {
    return (
        <div className="app-wrapper">
            <Sidebar />
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    );
};

export default AppWrapper;
