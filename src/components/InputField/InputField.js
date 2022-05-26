import "./InputField.scss";

const InputField = ({ type, name, placeholder }) => {
    return (
        <div className="field">
            <label className="field__label">{name}</label>
            {type === "text" ? (
                <input
                    className="field__input"
                    type="text"
                    placeholder={placeholder}
                />
            ) : (
                <textarea className="field__textarea"></textarea>
            )}
        </div>
    );
};

export default InputField;
