import "./Button.scss";

function Button({ className, text, icon }) {
  return (
    <button className={`${className} button`}>
      <img src={icon} alt="icon" />
      {text}
    </button>
  );
}

export default Button;
