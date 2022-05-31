import './AppWrapper.scss'
import MainContent from "../MainContent/MainContent";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppWrapper: React.FC = () => {
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
