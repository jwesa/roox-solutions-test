import "./Header.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleReadonly } from "../../store/reducers/readonlyReducer";

const Header = ({ title }) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header__title">{title}</div>
            {id !== undefined && (
                <Button
                    title="Редактировать"
                    className="button_header"
                    onClick={() => {
                        dispatch(toggleReadonly());
                    }}
                />
            )}
        </div>
    );
};

export default Header;
