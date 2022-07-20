import { useContext } from "react";
import { HomeListContext } from "../context/HomeContext";
import Slider from "../components/Home/Slider";
import HorizontalSections from "../components/Home/HorizontalSections";
import Sections from "../components/Home/Sections";
import Footer from "../components/Footer/Footer";
//Auth and success alert
import Alert from "../components/Authentication/Alert";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const { data: listData } = useContext(HomeListContext);

  const { success, alertTimer } = useAuthContext();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute text-white top-0 right-0 left-0 mt-10 h-16 z-50 pointer-events-none">
        <Alert text={success} type="success" timer={alertTimer} />
      </div>

      {listData.map((item) => {
        const { id, data, mode } = item;
        if (mode === "slider") return <Slider key={id} data={data} />;
        return null;
      })}
      <div className="py-6">
        <div className="px-5">
          {listData.map((item) => {
            const { id, title, data, type } = item;
            if (item.mode === "horizontal")
              return (
                <HorizontalSections
                  key={id}
                  title={title}
                  type={type}
                  data={data}
                />
              );
            else if (item.mode === "vertical")
              return (
                <Sections key={id} data={data} type={type} title={title} />
              );
            return null;
          })}
        </div>
      </div>
      {listData.length >= 5 && <Footer />}
    </section>
  );
};
export default Home;
