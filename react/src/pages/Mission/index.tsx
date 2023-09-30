import { AiOutlineMoneyCollect } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";
import Container from "src/components/Container";
import LargeImgCard from "src/components/LargeImgCard";

const Enterprise = () => {
  return (
    <Container>
      {/* Header */}
      <section className="flex flex-col gap-3">
        <span
          className="
          text-[20pt]
          lg:text-[25pt] font-semibold"
          style={{
            maxWidth: "500px",
          }}
        >
          We are not supposed to be
        </span>
        <div className="flex flex-row justify-between gap-12">
          <div
            className="flex flex-col gap-3 p-1 text-[14pt] lg:text-[15pt] font-normal"
            style={{
              maxWidth: "600px",
            }}
          >
            <span>
              In a world that values the ordinary, the predictable, the status
              quo - we dare to dance on the edges of what is known. We are the
              echo of the untold stories, the visions that dwell in the shadows,
              the ideas that defy the ordinary. At NewReligionX, we challenge
              the gravitational pull of convention, we are the architects of the
              unseen, the unheard.
            </span>

            <span>
              With{" "}
              <span
                onClick={() => window.open("https://www.partyx.fr")}
                className="font-semibold underline"
              >
                PartyX
              </span>
              , we reimagine celebrations, elevating everyday moments into
              legendary memories. Through{" "}
              <span
                onClick={() =>
                  window.open("https://d1k7b9a76xe97y.cloudfront.net/")
                }
                className="font-semibold underline"
              >
                IdeaToRealX
              </span>
              , we bridge the gap between dreamers and doers, making ideas
              tangible, and giving life to the latent potential in every
              connection. And with{" "}
              <span className="font-semibold underline">CommunityX</span>, we
              transform spaces into stories, every corner, every wall, narrating
              tales of wanderlust and welcome.
            </span>

            <span>
              We exist because of those who dare to dream differently. Those who
              feel the irresistible tug of the 'what ifs' and 'whys'. Those who,
              like us, believe that we are not just shaped by the world, but
              have the power to shape it back.
            </span>

            <span>
              This is not just a mission; it's a call to arms. To every rebel,
              every innovator, every fearless dreamer - we see you. Join us, and
              let's co-write a story that the world never thought it needed, but
              won't ever forget.
            </span>
          </div>
          <button
            onClick={() => alert("zldwkd93.business@gmail.com")}
            style={{ maxWidth: "300px", height: "fit-content" }}
            className="hidden lg:block bg-blue-700 text-neutral-50 px-6 py-3 rounded text-[12pt] font-mono"
          >
            Start the conversation
          </button>
        </div>
        <button
          onClick={() => alert("zldwkd93.business@gmail.com")}
          style={{ maxWidth: "300px", height: "fit-content" }}
          className="mt-5 block lg:hidden bg-blue-700 text-neutral-50 px-4 py-3 rounded text-[12pt] font-mono"
        >
          Start the conversation
        </button>
      </section>

      {/* Body */}
      <section
        style={{ marginTop: "50pt" }}
        className="flex flex-row justify-between"
      >
        <div className="hidden lg:block">
          <span className="font-semibold text-lg lg:text-xl mb-2 block text-gray-700">
            Our ambition
          </span>
          <p style={{ maxWidth: "300px" }} className="text-light text-gray-500">
            is to be your best partner, Earn attending/promoting. Secure,
            trustworthy platform for hosts.
          </p>
        </div>

        <LargeImgCard
          style={{ maxWidth: "600px" }}
          img={"/images/house.jpeg"}
        ></LargeImgCard>
      </section>

      <section
        style={{ marginTop: "50pt" }}
        className="lg:grid lg:grid-cols-3 lg:gap-4"
      >
        <div
          style={{ maxWidth: "350px" }}
          className="flex flex-col gap-4 p-2 my-5 w-full"
        >
          <span>
            <MdExplore size={50} />
          </span>
          <span className="font-semibold text-gray-800">
            Amplify Your Reach
          </span>
          <span className="text-[11pt] text-gray-600">
            Tap into a gamified event discovery platform, putting your events at
            the fingertips of eager attendees. With NewReligionX, your events
            stand out, drawing young adults and professionals seamlessly.
          </span>
        </div>

        <div
          style={{ maxWidth: "350px" }}
          className="flex flex-col gap-4 p-2 my-5 w-full"
        >
          <span>
            <RiShieldCheckLine size={50} />
          </span>
          <span className="font-semibold text-gray-800">
            Safe and Verified Events
          </span>
          <span className="text-[11pt] text-gray-600">
            Ensure participants' confidence with our robust event verification
            system, from necessary permits to physical inspections. High ratings
            and user feedback elevate your event's credibility.
          </span>
        </div>

        <div
          style={{ maxWidth: "350px" }}
          className="flex flex-col gap-4 p-2 my-5 w-full"
        >
          <span>
            <AiOutlineMoneyCollect size={50} />
          </span>
          <span className="font-semibold text-gray-800">
            Earning Opportunities Galore
          </span>
          <span className="text-[11pt] text-gray-600">
            Empower users and event organizers with our unique monetary
            incentive model. From ticket sales, referrals to affiliate
            marketing, we turn every engagement into a potential earning
            opportunity.
          </span>
        </div>
      </section>
    </Container>
  );
};

export default Enterprise;
