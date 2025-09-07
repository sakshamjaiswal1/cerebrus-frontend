import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import BlogHero from "../components/blog/BlogHero";
import BlogFeatured from "../components/blog/BlogFeatured";
import BlogCTA from "../components/blog/BlogCTA";
import BlogTabs from "../components/blog/BlogTabs";

function Blog() {
  return (
    <div className="bg-white">
      <main className="p-4 sm:p-6 lg:p-10">
        <Header />
        <BlogHero />
        <BlogFeatured />
        <BlogCTA />
        <BlogTabs />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default Blog;
