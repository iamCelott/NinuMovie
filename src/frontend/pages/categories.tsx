import Navbar from "../component/templates/Navbar";
import AuthLayout from "../component/layouts/AuthLayout";
import FormCategories from "../component/templates/FormCategories";
import Footer from "../component/templates/Footer";
const Categories = () => {
  return (
    <>
      <Navbar />
      <AuthLayout>
        <FormCategories />
      </AuthLayout>
      <Footer />
    </>
  );
};

export default Categories;
