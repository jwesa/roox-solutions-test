import "./InputField.scss";

const InputField = ({ type, name, value, placeholder, onChange, disabled }) => {
    return (
        <div className="field">
            <label className="field__label">{name}</label>
            {type !== "textarea" ? (
                <input
                    className="field__input"
                    type="text"
                    placeholder={placeholder}
                    value={value}
					onChange={onChange}
					disabled={disabled}
                />
            ) : (
                <textarea
                    className="field__textarea"
                    onChange={onChange}
					disabled={disabled}
                ></textarea>
            )}
        </div>
    );
};

export default InputField;
