import './Button.css'

const Button = ({ text, type, onClick }) => {
    console.log(text);
    return (
        <div>
            <button
                onClick={onClick}
                className={`Button Button_${type}`}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;