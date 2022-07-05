import { useAuthContext } from "../../context/AuthContext";
const Loading = () => {
  const { loading } = useAuthContext();
  return <>{loading && <div className="loadingAnimate z-30"></div>}</>;
};

export default Loading;
