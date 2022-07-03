import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//Components
import Input from "./Input";
import Alert from "./Alert";
import Loading from "./Loading";
import OtherMethods from "./OtherMethods";

//AuthContext
import { useAuthContext } from "../../context/AuthContext";

//Validate Inputs
import { validate } from "./validate";

const Signup = () => {
  const navigate = useNavigate();

  const { registerUser, error, loading, alertTimer } = useAuthContext();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  //validate steps
  const [inputError, setInputError] = useState({});
  const [inputTouched, setInputTouched] = useState({});
  useEffect(() => {
    setInputError(validate(inputValue));
    console.log(inputError);
  }, [inputValue]);

  const inputHandler = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value.trim(),
    });
    setInputTouched({
      ...inputTouched,
      [event.target.name]: true,
    });
  };

  const onSubmit = () => {
    if (!loading) {
      const { name, email, password } = inputValue;
      if (name && email && password && !Object.keys(inputError).length) registerUser(name, email, password);

      setInputTouched({
        name: true,
        email: true,
        password: true,
      });
    }
  };

  const goBackHandler = () => {
    navigate(-1, { replace: true });
  };

  return (
    <section>
      <div className="mt-5 ml-5">
        <button
          disabled={loading || (alertTimer && true)}
          className="text-2xl md:text-3xl text-white ri-arrow-left-line"
          onClick={goBackHandler}
        ></button>
      </div>
      <div className="mt-12 px-12 flex flex-col md:w-2/3 lg:w-1/2 2xl:w-1/3 md:mx-auto">
        <h2 className="text-xl text-white text-left mb-4">
          Create a new Account
        </h2>
        <Input
          name="Name"
          isError={inputError.name && true}
          errorMessage={inputError.name}
          isTouched={inputTouched.name}
          type="text"
          changeHandler={inputHandler}
        />
        <Input
          name="Email"
          isError={inputError.email && true}
          errorMessage={inputError.email}
          isTouched={inputTouched.email}
          type="email"
          changeHandler={inputHandler}
        />
        <Input
          name="Password"
          isError={inputError.password && true}
          errorMessage={inputError.password}
          isTouched={inputTouched.password}
          type="password"
          changeHandler={inputHandler}
        />

        <button
          disabled={loading || (alertTimer && true)}
          className="bg-primary text-white text-center rounded py-3 mt-3"
          onClick={onSubmit}
        >
          Register
        </button>

        <span className="text-center mt-10">-Or sign up with-</span>
        <span className="flex justify-center">
          <hr className="border-secondary border-t-4 mt-3 w-10/12" />
        </span>

        <OtherMethods />

        <span className="text-center mt-10">
          have an account?
          <span className="text-primary underline cursor-pointer">
          {(!loading && !alertTimer) && <span onClick={goBackHandler}> Login</span>}
          </span>
        </span>

        <Alert text={error} type="error" timer={alertTimer} />
        <Loading isLoading={loading} />
      </div>
    </section>
  );
};

export default Signup;
