import Layout from "../components/Layout";
import { ReadMoreIcon } from "../assets/icons";
import { Link } from "react-router-dom";

import "./pages.css";
import News from "../components/News";
import SelectedList from "../components/SelectedList";

const Home = () => {
  return (
    <Layout>
      <div className="home container page-content">
        <h2 className="title">Benjamin Zhang</h2>
        <em>Future Full-Stack Developer</em>
        <p>
          {" "}
          Hey there! 👋 I'm Ben, a former designer who, after a few years of
          pixel pushing, realized that coding is my true passion. I absolutely
          love coding! You can read more about me here:{" "}
          <Link to="./about" className="tag">
            <ReadMoreIcon /> about me
          </Link>
        </p>
        <News />
        <p>
          As a developer, staying abreast of the latest technology trends,
          advancements, and innovations is crucial for professional growth and
          effective problem-solving. Regular learning, attending conferences,
          and engaging with the developer community are valuable practices.
        </p>
        <SelectedList />
        <p>
          I started writing a blog earlier this year to document the knowledge I
          have been acquiring through my learning journey. It has been an
          enriching experience where I get to share my insights, discoveries,
          and I am eager to continue this rewarding endeavor as I keep learning
          and growing.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
