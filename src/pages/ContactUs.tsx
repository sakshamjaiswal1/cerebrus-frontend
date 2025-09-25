import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactCards from "../components/contact/ContactCards";

function ContactUs() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Helmet>
          <title>
            Contact Us - Cerebrus AI Interview Platform | Get in Touch
          </title>
          <meta
            name="description"
            content="Contact Cerebrus for AI interview platform inquiries, demos, and support. Get in touch with our team to learn how our advanced AI technology can transform your hiring process."
          />
          <meta
            name="keywords"
            content="contact cerebrus, AI interview demo, hiring technology support, recruitment consultation, AI interview inquiry"
          />
          <meta
            property="og:title"
            content="Contact Cerebrus - AI Interview Platform Support"
          />
          <meta
            property="og:description"
            content="Get in touch with Cerebrus to learn more about our AI interview platform and how it can revolutionize your hiring process."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cerebrus.ai/contact" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Contact Cerebrus - AI Interview Support"
          />
          <meta
            name="twitter:description"
            content="Reach out to learn more about AI interview technology."
          />
          <link rel="canonical" href="https://cerebrus.ai/contact" />
        </Helmet>
        <main className="p-10 max-md:p-5">
          <Header />
          <ContactHero />
          <ContactForm />
          <ContactCards />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default ContactUs;
