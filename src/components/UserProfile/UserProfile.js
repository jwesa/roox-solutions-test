import "./UserProfile.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { inputConfig } from "./inputConfig";

const UserProfile = () => {
    return (
        <div className="user-profile">
            <div className="user-profile__container">
                {inputConfig.map((item) => {
                    return (
                        <InputField
                            name={item.name}
                            placeholder={item.placeholder}
                            type={item.type}
                        />
                    );
                })}
			</div>
			<Button title="Отправить" className="button_send"/>
        </div>
    );
};

export default UserProfile;
