import { Helmet } from "react-helmet-async";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CTASection from "../components/home/CTASection";
import StructuredInterviewReports from "../components/candidateReport/StructuredInterviewReports";
import IntegratedChat from "../components/candidateReport/IntegratedChat";

function CandidateReport() {
  return (
    <div className="bg-alt-white">
      <div className="max-w-[1440px] mx-auto">
        <Helmet>
          <title>
            Candidate Reports - Cerebrus AI Interview Platform | Detailed
            Assessment Analytics
          </title>
          <meta
            name="description"
            content="Generate comprehensive candidate reports with Cerebrus AI interview platform. Access structured interview analytics, detailed assessments, and integrated communication tools for informed hiring decisions."
          />
          <meta
            name="keywords"
            content="candidate reports, interview analytics, assessment reports, hiring insights, interview evaluation, candidate assessment"
          />
          <meta
            property="og:title"
            content="Cerebrus Candidate Reports - AI Interview Analytics"
          />
          <meta
            property="og:description"
            content="Access detailed candidate reports and interview analytics with Cerebrus AI interview platform for data-driven hiring decisions."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://cerebrus.ai/candidate-reports"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Cerebrus Candidate Reports - Interview Analytics"
          />
          <meta
            name="twitter:description"
            content="Comprehensive candidate reports and interview insights."
          />
          <link rel="canonical" href="https://cerebrus.ai/candidate-reports" />
        </Helmet>
        <main className="p-4 sm:p-6 lg:p-10">
          <Header />
          <StructuredInterviewReports />
          <IntegratedChat />
          <CTASection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default CandidateReport;
