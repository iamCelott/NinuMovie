import HomeLayout from "../component/layouts/HomeLayout";
import Navbar from "../component/templates/Navbar";
import FormHome from "../component/templates/FormHome";
import Footer from "../component/templates/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <FormHome />
      </HomeLayout>
      <Footer />
    </>
  );
};

export default Home;
