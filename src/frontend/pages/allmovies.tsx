import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormAllMovies from "../component/templates/FormAllMovies";
const AllMovies = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormAllMovies />
      </AuthLayout>
    </>
  );
};

export default AllMovies;
