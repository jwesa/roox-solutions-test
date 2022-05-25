import Button from "../Button/Button";
import "./Header.scss";

const Header = ({ title }) => {
    return (
        <div className="header">
			<div className="header__title">{title}</div>
			{/* <Button title='Редактировать' className='button_header'/> */}
        </div>
    );
};

export default Header;
