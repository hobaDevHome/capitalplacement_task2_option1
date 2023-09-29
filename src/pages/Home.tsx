import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
      <SideBar />
      <MainContent />
    </div>
  );
};

export default Home;
