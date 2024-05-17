import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormGenres from "../component/templates/FormGenres";
import Footer from "../component/templates/Footer";
const Genres = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormGenres />
      </AuthLayout>
      <Footer />
    </>
  );
};

export default Genres;
