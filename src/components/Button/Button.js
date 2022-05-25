import "./Button.scss";

const Button = ({ title, onClick, className, disabled }) => {
    return (
        <div>
			<button className={`button ${className}`} onClick={onClick} disabled={disabled}>
                {title}
            </button>
        </div>
    );
};

export default Button;
