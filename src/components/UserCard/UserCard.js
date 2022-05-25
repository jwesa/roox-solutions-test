import { Link } from "react-router-dom";
import "./UserCard.scss";

const UserCard = () => {
    return (
        <div className="user-card">
            <div className="user-card__list">
                <div className="user-card__item">
                    <span className="user-card__name">ФИО:</span> Ivan Ivanov
                </div>
                <div className="user-card__item">
                    <span className="user-card__name">город:</span> Moscow
                </div>
                <div className="user-card__item">
                    <span className="user-card__name">компания:</span> Google
                </div>
            </div>
            <Link to="/" className="user-card__link">
                Подробнее
            </Link>
        </div>
    );
};

export default UserCard;
