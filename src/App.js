import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/fetchUsersReducer";
import AppWrapper from "./containers/AppWrapper/AppWrapper";
import UserProfile from "./components/UserProfile/UserProfile";
import UserListPage from "./components/UserListPage/UserListPage";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index element={<UserListPage />} />
                <Route path={":userId"} element={<UserProfile />} />
            </Route>
        </Routes>
    );
};

export default App;