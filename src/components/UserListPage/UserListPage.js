import "./UserListPage.scss";
import UserList from "../../containers/UserList/UserList";
import Header from "../Header/Header";

const UserListPage = () => {
    return (
        <div className="user-list">
            <Header title="Список пользователей" />
            <UserList />
        </div>
    );
};

export default UserListPage;
