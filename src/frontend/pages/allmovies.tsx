import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormAllMovies from "../component/templates/FormAllMovies";
import Footer from "../component/templates/Footer";
const AllMovies = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormAllMovies />
      </AuthLayout>
      <Footer />
    </>
  );
};

export default AllMovies;
