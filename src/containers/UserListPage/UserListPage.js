import UserList from "../../components/UserList/UserList";
import Header from "../../components/Header/Header";

const UserListPage = () => {
    return (
        <>
            <Header title="Список пользователей" />
            <UserList />
        </>
    );
};

export default UserListPage;
