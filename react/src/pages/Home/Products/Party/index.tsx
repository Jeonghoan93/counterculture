import { GiLovers } from "react-icons/gi";
import Container from "src/components/Container";
import LargeImgCard from "src/components/LargeImgCard";
import LeftSide from "./Sections/LeftSide";
import RightSide from "./Sections/RightSide";

const Party = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: "70px",
        }}
        className="
          max-w-screen-xl 
          mx-auto
        "
      >
        <section className="flex flex-col gap-4">
          <LargeImgCard dark={true} img={"/images/partyx.jpg"}>
            <div className="text-white flex flex-row items-center gap-3 font-bold text-[14pt]">
              <span>
                <GiLovers />
              </span>

              <span>Hosts any type of party events</span>
            </div>
          </LargeImgCard>

          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-3 
            "
          >
            <LeftSide />
            <div
              className="
                md:order-last 
                md:col-span-3
              "
            >
              <RightSide />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Party;
