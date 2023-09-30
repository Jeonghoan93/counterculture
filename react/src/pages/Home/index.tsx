import Container from "src/components/Container";
import { useCurrentUser } from "src/hooks/useCurrentUser";
import CustomizedSection from "./Sections/CustomizedSection";
import FeaturedSection from "./Sections/FeaturedSection";
import FestivalSection from "./Sections/FestivalSection";
import NearSection from "./Sections/NearSection";
import NewestSection from "./Sections/NewestSection";
import TodaySection from "./Sections/TodaySection";
import TrendingSection from "./Sections/TrendingSection";

const Home: React.FC = () => {
  const currentUser = useCurrentUser();

  return (
    <Container>
      <div>
        {currentUser ? <CustomizedSection currentUser={currentUser} /> : null}
        <TodaySection />
        <NearSection />
        <FestivalSection />
        <FeaturedSection />
        <TrendingSection />
        <NewestSection />
      </div>
    </Container>
  );
};

export default Home;