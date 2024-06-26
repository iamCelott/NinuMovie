import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormHome from "../component/templates/FormHome";
import Footer from "../component/templates/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormHome />
      </AuthLayout>
      <Footer />
    </>
  );
};

export default Home;
