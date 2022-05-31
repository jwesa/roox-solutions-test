import "./Header.scss";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hook";
import { toggleReadonly } from "../../app/reducers/readonlyReducer";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const { id } = useParams();

    const dispatch = useAppDispatch();

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
