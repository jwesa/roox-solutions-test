import "./UserProfile.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { inputConfig } from "./inputConfig";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const { userId } = useParams();

    const { readonly } = useSelector((state) => state.readonly);
    const { users } = useSelector((state) => state.users);

    const user = users.find((user) => user.id === +userId);

    const [value, setValue] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        comment: "",
    });

    return (
        <div className="user-profile">
            <div className="user-profile__container">
                {inputConfig.map((item, i) => {
                    return (
                        <InputField
                            key={i}
                            name={item.name}
                            value={value[item.key]}
                            placeholder={item.placeholder}
                            type={item.type}
                            disabled={readonly}
                            onChange={(e) => {
                                setValue((prev) => ({
                                    ...prev,
                                    [item.key]: e.target.value,
                                }));
                            }}
                        />
                    );
                })}
            </div>
            <Button
                title="Отправить"
                className="button_send"
                disabled={readonly}
            />
        </div>
    );
};

export default UserProfile;
