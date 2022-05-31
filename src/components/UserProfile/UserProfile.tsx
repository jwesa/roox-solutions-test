import "./UserProfile.scss";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { inputConfig } from "./inputConfig";
import { useState } from "react";
import { useAppSelector } from "../../hook";
import { IUser, IValue } from "../../types/types";

interface UserProfileProps {
    user: IUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const { readonly } = useAppSelector((state) => state.readonly);

    const [value, setValue] = useState<IValue>({
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

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (
            value.name &&
            value.username &&
            value.email &&
            value.street &&
            value.city &&
            value.zipcode &&
            value.phone &&
            value.website
        ) {
            console.log(JSON.stringify(value));
        }
    };

    return (
        <div className="user-profile">
            <div className="user-profile__container">
                {inputConfig.map((item, i) => {
                    return (
                        <InputField
                            key={i}
                            name={item.name}
                            type={item.type}
                            placeholder={item.placeholder}
                            value={value[item.key]}
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
                onClick={handleSubmit}
            />
        </div>
    );
};

export default UserProfile;
