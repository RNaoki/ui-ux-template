import Feature from './Feature';

interface IWhatGPT3Props {}

const WhatGPT3: React.FC<IWhatGPT3Props> = (props) => {
  return (
    <div className="py-8 px-8 md:px-12 lg:px-24" id="whpt3">
      <div className="flex flex-col bg-bg bg-gradient-to-br from-[#1B78DE] from-[18%] to-[#042C54] py-12 px-12 md:px-24 gap-24">
        <div className="md:flex justify-between">
          <div>
            <Feature title="What is GPT-3" />
          </div>
          <p className="md:max-w-[60%] text-[#81AFDD] text-[16px]">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-[transparent] bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] bg-clip-text text-[34px] font-[800] md:mr-20 tracking-[-0.04rem] md:max-w-[480px] mb-[20px]">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-[#FF8A71] text-[16px] cursor-pointer">
            Explore The Library
          </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-12">
          <div className="lg:w-[334px]">
            <Feature
              title="Chatbots"
              text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
            />
          </div>
          <div className="lg:w-[334px]">
            <Feature
              title="Knowledgebase"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
          </div>
          <div className="lg:w-[334px]">
            <Feature
              title="Education"
              text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
