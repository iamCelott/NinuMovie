import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormSearchMovie from "../component/templates/FormSearchMovie";
import Footer from "../component/templates/Footer";
const SearchMovie = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormSearchMovie />
      </AuthLayout>
      <Footer />
    </>
  );
};
export default SearchMovie;
