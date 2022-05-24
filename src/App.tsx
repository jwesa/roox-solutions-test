import { Routes, Route } from "react-router-dom";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import UserList from "./components/UserList/UserList";
import UserProfile from "./components/UserProfile/UserProfile";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index element={<UserList />} />
                <Route path={":userId"} element={<UserProfile />} />
            </Route>
        </Routes>
    );
};

export default App;
