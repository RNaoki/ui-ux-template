interface ICTAProps {}

const CTA: React.FC<ICTAProps> = (props) => {
  return (
    <div className="py-28 px-8 md:px-12 lg:px-24">
      <div className="flex flex-col gap-10 md:flex-row bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] px-12 py-10 rounded-[10px] justify-between items-center">
        <div className="flex flex-col gap-1">
          <p className="color-[#0E0E0E] text-[12px]">
            Request Early Access to Get Started
          </p>
          <h1 className="color-[#0E0E0E] text-[24px] font-[800]">
            Register today & start exploring the endless possiblities.
          </h1>
        </div>
        <button className="rounded-full w-[190px] font-bold text-[18px] bg-bg text-[#FFF] py-[12px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
