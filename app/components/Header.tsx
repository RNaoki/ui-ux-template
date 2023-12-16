'use client';
import '../globals.css';
interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <div className="lg:flex py-8 px-8 md:px-12 lg:px-24">
      <div className="flex flex-1 justify-center items-start flex-col">
        <h1 className="text-[transparent] bg-gradient-to-b from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] bg-clip-text text-[50px] md:text-[75px] font-[800] mr-20 tracking-[-0.04rem]">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-[20px] text-[#81AFDD] mt-[1.5rem]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="w-[80%] mt-8 mb-4 flex">
          <input
            className="flex-2 w-full rounded-l-[5px] bg-[#002853] text-[20px] min-h-[50px] border-[2px] border-footer px-4 text-[#FFF] border-r-0"
            type="email"
            placeholder="Your Email Address"
          />
          <button
            className="rounded-r-[5px] bg-[#FF4820] text-[20px] min-h-[50px] border-[2px] border-footer px-4 text-[#FFF] border-l-0 min-w-[180px]"
            type="button"
          >
            Get Started
          </button>
        </div>
        <div className="flex w-[full] justify-start items-center mt-[1.5rem]">
          <img src={'/People.png'} className="w-[181.79px] h-[38px]" />
          <p className="text-[12px] text-[#81AFDD] ml-4">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="lg:w-[50%]">
        <img
          src={'/ai.png'}
          className={`flex-1 flex justify-center items-center w-full h-auto animate-wiggle`}
        />
      </div>
    </div>
  );
};

export default Header;
