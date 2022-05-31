import Header from "../../components/Header/Header";
import UserProfile from "../../components/UserProfile/UserProfile";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hook";
import { IUser } from "../../types/types";

const UserProfilePage: React.FC = () => {
    const { id } = useParams();
    const { users } = useAppSelector((state) => state.users);

    const user = users.find((user): IUser | undefined => {
        if (id !== undefined) {
            if (user.id === +id) {
                return user;
            }
        }
        return undefined;
    });

    return (
        <>
            <Header title="Профиль пользователя" />
            {user && <UserProfile user={user} />}
        </>
    );
};

export default UserProfilePage;
