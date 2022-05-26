import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/usersReducer";
import AppWrapper from "./containers/AppWrapper/AppWrapper";
import UserListPage from "./containers/UserListPage/UserListPage";
import UserProfilePage from "./containers/UserProfilePage/UserProfilePage";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index element={<UserListPage />} />
                <Route path={":userId"} element={<UserProfilePage />} />
            </Route>
        </Routes>
    );
};

export default App;
