import "./Button.scss";

const Button = ({ title, onClick, className }) => {
    return (
        <div>
            <button className={`button ${className}`} onClick={onClick}>
                {title}
            </button>
        </div>
    );
};

export default Button;
