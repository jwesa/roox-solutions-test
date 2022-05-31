import AppWrapper from "./containers/AppWrapper/AppWrapper";
import UserListPage from "./pages/UserListPage/UserListPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./hook";
import { fetchUsers } from "./app/reducers/usersReducer";

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/users" element={<AppWrapper />}>
                <Route index element={<UserListPage />} />
                <Route path="/users" element={<UserListPage />} />
                <Route path={"/users/:id"} element={<UserProfilePage />} />
            </Route>
        </Routes>
    );
};

export default App;
