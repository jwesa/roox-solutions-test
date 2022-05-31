import "./Button.scss";

interface ButtonProps {
    title: string;
    className: string;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    title,
    className,
    disabled,
    onClick,
}) => {
    return (
        <div>
            <button
                className={`button ${className}`}
                disabled={disabled}
                onClick={onClick}
            >
                {title}
            </button>
        </div>
    );
};

export default Button;
