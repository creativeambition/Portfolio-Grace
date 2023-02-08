import "./Home.scss";
import profile from "../../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="details">
        <span className="intro">Hello, I'm</span>

        <div className="name">
          <div>
            <h1 className="txt">GR</h1>
            <h1 className="txt">AC</h1>
          </div>

          <h1 className="txt lg">E</h1>

          <div className="dev">
            FULL-STACK <b>DEVELOPER</b>
          </div>
        </div>
      </div>

      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Home;
