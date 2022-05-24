import Button from "../Button/Button";
import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>Сортировка</div>
            <div className="sidebar__button">
                <Button title="по городу" className="button_sidebar" />
            </div>
            <div className="sidebar__button">
                <Button title="по компании" className="button_sidebar" />
            </div>
        </div>
    );
};

export default Sidebar;
