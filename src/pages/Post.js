import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

const Post = () => {
  return (
    <Layout>
      <div className="container page-content">
        <Outlet />
      </div>
    </Layout>
  );
};

export default Post;
