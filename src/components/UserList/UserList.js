import "./UserList.scss";
import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
    const { users } = useSelector((state) => state.users);
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
