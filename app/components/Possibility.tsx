interface IPossibilityProps {}

const Possibility: React.FC<IPossibilityProps> = (props) => {
  return (
    <div className="py-8 px-8 md:px-12 lg:px-24" id="possibility">
      <div className="flex flex-col-reverse md:flex-row gap-10">
        <div className="lg:w-[50%]">
          <img
            src={'/possibility.png'}
            className={`flex-1 flex justify-center items-center w-full h-auto animate-wiggle`}
          />
        </div>
        <div className="flex-1 flex-col flex justify-center gap-10">
          <h1 className="text-[transparent] bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] bg-clip-text text-[34px] font-[800] md:mr-20 tracking-[-0.04rem] mb-[20px]">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-[#81AFDD] text-[16px]">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <p className="text-[#FF8A71] text-[16px] cursor-pointer">
            Request Early Access to Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
