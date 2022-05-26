import "./Sidebar.scss";
import Button from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeSortDirection } from "../../store/reducers/sortReducer";
import { updateUsers } from "../../store/reducers/usersReducer";

const Sidebar = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const { direction } = useSelector((state) => state.direction);

    const sortBy = (keyName, directionName) => {
        const key = keyName.split(".");
        const newUsers = [...users];

        newUsers.sort((a, b) => {
            if (direction) {
                return a[key[0]][key[1]].localeCompare(b[key[0]][key[1]]);
            }
            return b[key[0]][key[1]].localeCompare(a[key[0]][key[1]]);
        });

        dispatch(changeSortDirection(directionName));
        dispatch(updateUsers(newUsers));
    };

    return (
        <div className="sidebar">
            <div>Сортировка</div>
            <div className="sidebar__button">
                <Button
                    title="по городу"
                    className="button_sidebar"
                    onClick={() => {
                        sortBy("address.city", "city");
                    }}
                />
            </div>
            <div className="sidebar__button">
                <Button
                    title="по компании"
                    className="button_sidebar"
                    onClick={() => {
                        sortBy("company.name", "company");
                    }}
                />
            </div>
        </div>
    );
};

export default Sidebar;
