import CTASection from "../components/common/CTASection";
import Footer from "../components/common/Footer";
import Header2 from "../components/common/Header2";
import FamiliarCustomizable from "../components/meetahuman/FamiliarCustomizable";
import MeetAHumanHero from "../components/meetahuman/MeetAHumanHero";
import ObjectivityBuiltIn from "../components/meetahuman/ObjectivityBuiltIn";
import ResponsiveByDesign from "../components/meetahuman/ResponsiveByDesign";
import TheRealismLayer from "../components/meetahuman/TheRealismLayer";

const MeetAHuman = () => {
    return (
        <div className="bg-primary">
            <main className="p-10">
                <Header2 />
                <MeetAHumanHero />
                <TheRealismLayer />
                <ResponsiveByDesign />
                <ObjectivityBuiltIn />
                <FamiliarCustomizable />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
};

export default MeetAHuman;
