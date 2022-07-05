const Input = ({ name, type, changeHandler, errorMessage, isTouched }) => {
  return (
    <div className="mt-1 flex flex-col">
      <label className="mb-1">{name}:</label>
      <input
        className="commentInput"
        placeholder={`Enter your ${name}`}
        type={type}
        onChange={changeHandler}
        name={name.toLowerCase()}
        maxLength={name == "Name" ? 20 : 100}
        autoComplete="off"
        required
      />
      <span className="text-red-500 text-sm -mt-2 mb-3">
        {isTouched && errorMessage}
      </span>
    </div>
  );
};

export default Input;
