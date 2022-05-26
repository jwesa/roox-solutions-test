import "./UserListPage.scss";
import UserList from "../../components/UserList/UserList";
import Header from "../../components/Header/Header";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

const UserListPage = () => {
    const { loading } = useSelector((state) => state.users);
    return (
        <>
            <Header title="Список пользователей" />

            {loading ? (
                <div className="spinner__container">
                    <TailSpin color="#4b51ef" width={100} height={100} />
                </div>
            ) : (
                <UserList />
            )}
        </>
    );
};

export default UserListPage;
