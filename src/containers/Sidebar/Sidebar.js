import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import "./Sidebar.scss";

const Sidebar = () => {
    const { users } = useSelector((state) => state.users);

    const sortBy = (keyName) => {
        const key = keyName.split(".");
        const newUsers = [...users];

        newUsers.sort((a, b) => {
            return a[key[0]][key[1]].localeCompare(b[key[0]][key[1]]);
        });
        console.log(newUsers);
    };

    return (
        <div className="sidebar">
            <div>Сортировка</div>
            <div className="sidebar__button">
                <Button
                    title="по городу"
                    className="button_sidebar"
                    onClick={() => sortBy("address.city")}
                />
            </div>
            <div className="sidebar__button">
                <Button
                    title="по компании"
                    className="button_sidebar"
                    onClick={() => sortBy("company.name")}
                />
            </div>
        </div>
    );
};

export default Sidebar;
