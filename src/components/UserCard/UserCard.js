import "./UserCard.scss";
import { Link } from "react-router-dom";

const UserCard = ({ name, city, company, id }) => {
    return (
        <div className="user-card">
            <div className="user-card__list">
                <div className="user-card__item">
                    <span className="user-card__name">ФИО:</span> {name}
                </div>
                <div className="user-card__item">
                    <span className="user-card__name">город:</span> {city}
                </div>
                <div className="user-card__item">
                    <span className="user-card__name">компания:</span> {company}
                </div>
            </div>
            <Link to={`${id}`} className="user-card__link">
                Подробнее
            </Link>
        </div>
    );
};

export default UserCard;
