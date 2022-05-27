import { useState } from "react";
import "./InputField.scss";

const InputField = ({ type, name, value, placeholder, onChange, disabled }) => {
    const [error, setError] = useState(null);

    const blurHandler = (e) => {
        e.target.value === "" ? setError("field__input_error") : setError(null);
    };

    return (
        <div className="field">
            <label className="field__label">{name}</label>
            {type !== "textarea" ? (
                <input
                    className={`field__input ${error}`}
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onBlur={blurHandler}
                    onChange={onChange}
                    disabled={disabled}
                />
            ) : (
                <textarea
                    className="field__textarea"
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                ></textarea>
            )}
        </div>
    );
};

export default InputField;
