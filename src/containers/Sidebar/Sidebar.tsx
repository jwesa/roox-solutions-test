import "./Sidebar.scss";
import Button from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hook";
import { changeSortDirection } from "../../app/reducers/sortReducer";
import { updateUsers } from "../../app/reducers/usersReducer";

const Sidebar = () => {
    const dispatch = useAppDispatch();

    const { users } = useAppSelector((state) => state.users);
    const { direction } = useAppSelector((state) => state.sort);

    const sortBy = (keyName: string) => {
        const key = keyName.split(".");
        const updatedUsers = [...users];

        updatedUsers.sort((a, b) => {
            if (direction) {
                return a[key[0]][key[1]].localeCompare(b[key[0]][key[1]]);
            }
            return b[key[0]][key[1]].localeCompare(a[key[0]][key[1]]);
        });

        dispatch(changeSortDirection());
        dispatch(updateUsers(updatedUsers));
    };

    return (
        <div className="sidebar">
            <div>Сортировка</div>
            <div className="sidebar__button">
                <Button
                    title="по городу"
                    className="button_sidebar"
                    onClick={() => {
                        sortBy("address.city");
                    }}
                />
            </div>
            <div className="sidebar__button">
                <Button
                    title="по компании"
                    className="button_sidebar"
                    onClick={() => {
                        sortBy("company.name");
                    }}
                />
            </div>
        </div>
    );
};

export default Sidebar;
