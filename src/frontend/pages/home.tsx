import HomeLayout from "../component/layouts/HomeLayout";
import Navbar from "../component/templates/Navbar";
import FormHome from "../component/templates/FormHome";
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <FormHome />
      </HomeLayout>
    </>
  );
};

export default Home;
