import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FetchConfig from "./components/FetchConfig";
import UpdateRemark from "./components/UpdateRemark";
import DeleteConfig from "./components/DeleteConfig";
function App() {
  return (
    <>
      <Navbar/>
      <FetchConfig/>
      <UpdateRemark/>
      <DeleteConfig/>
      <Footer/>
    </>
  );
}

export default App;
