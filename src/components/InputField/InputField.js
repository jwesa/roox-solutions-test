import "./InputField.scss";

const InputField = ({ type, name, value, placeholder, onChange }) => {
    return (
        <div className="field">
            <label className="field__label">{name}</label>
            {type === "text" ? (
                <input
                    className="field__input"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <textarea
                    className="field__textarea"
                    onChange={onChange}
                ></textarea>
            )}
        </div>
    );
};

export default InputField;
