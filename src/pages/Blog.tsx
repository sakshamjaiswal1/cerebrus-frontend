import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>
          Blog - Cerebrus AI Interview Platform | Latest Insights & Updates
        </title>
        <meta
          name="description"
          content="Stay updated with the latest insights on AI interview technology, hiring trends, and recruitment innovations. Read expert articles and updates from the Cerebrus team."
        />
        <meta
          name="keywords"
          content="AI interview blog, hiring technology insights, recruitment trends, interview automation articles, HR technology blog"
        />
        <meta
          property="og:title"
          content="Cerebrus Blog - AI Interview Technology Insights"
        />
        <meta
          property="og:description"
          content="Discover the latest insights and trends in AI interview technology and modern recruitment practices."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cerebrus.ai/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cerebrus Blog - AI Interview Insights"
        />
        <meta
          name="twitter:description"
          content="Latest insights on AI interview technology and hiring trends."
        />
        <link rel="canonical" href="https://cerebrus.ai/blog" />
      </Helmet>
      <main className="p-10">
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
