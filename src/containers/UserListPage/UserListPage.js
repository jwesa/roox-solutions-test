import "./UserListPage.scss";
import UserList from "../../components/UserList/UserList";
import Header from "../../components/Header/Header";

const UserListPage = () => {
    return (
        <div className="user-list-page">
            <Header title="Список пользователей" />
            <UserList />
        </div>
    );
};

export default UserListPage;
