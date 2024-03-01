import Disclaimer from "../components/Disclaimer";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import { Head } from "../components/seo/Head";

const DisclaimerPage = () => {
  return (
    <>
      <Head
        title="Disclaimer"
        description="Interweb ID Disclaimer"
        route="/disclaimer"
        nofollow={true}
        noindex={true}
      />
      <Header />
      <Disclaimer />
      <Footer />
    </>
  );
};

export default DisclaimerPage;
