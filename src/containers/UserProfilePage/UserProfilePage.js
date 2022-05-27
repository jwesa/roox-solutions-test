import Header from "../../components/Header/Header";
import UserProfile from "../../components/UserProfile/UserProfile";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfilePage = () => {
    const { id } = useParams();
    const { users } = useSelector((state) => state.users);

    const user = users.find((user) => user.id === +id);

    return (
        <>
            <Header title="Профиль пользователя" />
            <UserProfile user={user} />
        </>
    );
};

export default UserProfilePage;
