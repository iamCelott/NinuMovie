import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormSingleMoviePage from "../component/templates/FormSingleMoviePage";
import Footer from "../component/templates/Footer";
const SingleMoviePage = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormSingleMoviePage />
      </AuthLayout>
      <Footer />
    </>
  );
};

export default SingleMoviePage;
