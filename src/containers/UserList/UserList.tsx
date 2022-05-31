import "./UserList.scss";
import UserCard from "../../components/UserCard/UserCard";
import { useAppSelector } from "../../hook";

const UserList: React.FC = () => {
    const { users } = useAppSelector((state) => state.users);

    return (
        <>
            {users.map((user) => {
                return (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        city={user.address.city}
                        company={user.company.name}
                    />
                );
            })}
            <div className="user-list__count">
                Найдено {users.length} пользователей
            </div>
        </>
    );
};

export default UserList;
