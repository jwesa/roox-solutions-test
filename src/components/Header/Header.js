import { useParams } from "react-router-dom";
import Button from "../Button/Button";
import "./Header.scss";

const Header = ({ title }) => {
	const { userId } = useParams();
	
    return (
        <div className="header">
            <div className="header__title">{title}</div>
            {userId !== undefined && (
                <Button title="Редактировать" className="button_header" />
            )}
        </div>
    );
};

export default Header;
