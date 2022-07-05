import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const UserDetails = ({ name, openDetails }) => {
  const { logoutUser } = useAuthContext();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await logoutUser();
    navigate("/");
    openDetails(false);
  };
  return (
    <div className="absolute w-44 overflow-hidden bg-secondary top-14 left-5 rounded">
      <ul>
        {name && (
          <li className="px-2 h-10 flex flex-col justify-center border-b-2 border-gray-900 cursor-default">
            {name}
          </li>
        )}
        <li
          onClick={logoutHandler}
          className="px-2 hover:bg-red-500 active:bg-red-600  h-10 flex flex-col justify-center cursor-pointer"
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default UserDetails;
