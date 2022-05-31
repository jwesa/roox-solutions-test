import "./InputField.scss";
import { useState } from "react";

interface InputFieldProps {
    type: string;
    name: string;
    value: string | [key: string];
    placeholder: string;
    disabled: boolean;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    name,
    value,
    placeholder,
    disabled,
    onChange,
}) => {
    const [error, setError] = useState<string>("");

    const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value === "" ? setError("field__input_error") : setError("");
    };

    return (
        <div className="field">
            <label className="field__label">{name}</label>
            {type !== "textarea" ? (
                <input
                    className={`field__input ${error}`}
                    type="text"
                    spellCheck="false"
                    placeholder={placeholder}
                    value={value}
                    onBlur={blurHandler}
                    onChange={onChange}
                    disabled={disabled}
                />
            ) : (
                <textarea
                    className="field__textarea"
                    spellCheck="false"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                ></textarea>
            )}
        </div>
    );
};

export default InputField;
