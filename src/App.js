import AppWrapper from "./containers/AppWrapper/AppWrapper";
import UserListPage from "./containers/UserListPage/UserListPage";
import UserProfilePage from "./containers/UserProfilePage/UserProfilePage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/reducers/usersReducer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index element={<UserListPage />} />
                <Route path={":id"} element={<UserProfilePage />} />
            </Route>
        </Routes>
    );
};

export default App;
