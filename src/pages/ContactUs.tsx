import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactCards from "../components/contact/ContactCards";

function ContactUs() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <main className="p-10">
        <Header />
        <ContactHero />
        <ContactForm />
        <ContactCards />
        <Footer />
      </main>
    </div>
  );
}

export default ContactUs;
