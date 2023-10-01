import "./Animation.css";

const HeaderMission = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
      className="relative mt-[-12pt]"
    >
      <div
        style={{
          // backgroundImage: `url(${randomImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0.3, 0.2, 0.95)",
        }}
        className="absolute top-0 left-0 w-full h-full z-10"
      ></div>

      <div
        style={{
          maxWidth: "300px",
        }}
        className="relative top-2/3 left-1/2 transform -translate-x-2/3 -translate-y-1/2 z-10"
      >
        <div className="text-gray-100 mb-6 flex flex-col gap-4">
          <span className="text-[15pt] font-bold">Mission</span>
          <span className="sparkles text-[10pt]">
            For those who dare to dream differently
          </span>

          <span className="text-gray-300 font-bold text-[12pt] mb-2 font-mono">
            To every rebel, every innovator, every fearless dreamer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMission;
