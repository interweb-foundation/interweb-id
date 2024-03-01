import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { Head } from "../components/seo/Head";

const HomePage = () => {
  return (
    <Layout>
      <Head title="Interweb ID" description="Own your Digital Identity" route="/" />
      <Hero />
    </Layout>
  );
};

export default HomePage;
