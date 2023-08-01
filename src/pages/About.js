import Layout from "../components/Layout";
import Markdown from "react-markdown";
import aboutText from "../pages.json";

import "./pages.css";

const About = () => {
  return (
    <Layout>
      <div className="container page-content">
        <Markdown children={aboutText[0].contents} />
      </div>
    </Layout>
  );
};

export default About;
