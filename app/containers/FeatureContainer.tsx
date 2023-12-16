import Feature from '../components/Feature';

interface IFeatureContainerProps {}

const FeatureContainer: React.FC<IFeatureContainerProps> = (props) => {
  return (
    <div className="flex flex-col lg:flex-row py-8 px-8 md:px-12 lg:px-24 gap-10 pt-40">
      <div className="flex gap-10 flex-col">
        <h1 className="text-[transparent] bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] bg-clip-text text-[34px] font-[800] md:mr-20 tracking-[-0.04rem] lg:w-[30vw]">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p className="text-[#FF8A71] text-[16px] cursor-pointer">
          Request Early Access to Get Started
        </p>
      </div>
      <div className="grid md:grid-cols-3 flex-col gap-0 md:gap-20">
        <div>
          <Feature title="Improving end distrusts instantly" />
        </div>
        <p className="text-[#81AFDD] text-[16px] md:col-span-2 mb-[60px]">
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </p>
        <div>
          <Feature title="Become the tended active" />
        </div>
        <p className="text-[#81AFDD] text-[16px] md:col-span-2 mb-[60px]">
          Considered sympathize ten uncommonly occasional assistance sufficient
          not. Letter of on become he tended active enable to.
        </p>
        <div>
          <Feature title="Message or am nothing" />
        </div>
        <p className="text-[#81AFDD] text-[16px] md:col-span-2 mb-[60px]">
          Led ask possible mistress relation elegance eat likewise debating. By
          message or am nothing amongst chiefly address.
        </p>
        <div>
          <Feature title="Really boy law county" />
        </div>
        <p className="text-[#81AFDD] text-[16px] md:col-span-2 mb-[60px]">
          Really boy law county she unable her sister. Feet you off its like
          like six. Among sex are leave law built now. In built table in an
          rapid blush.
        </p>
      </div>
    </div>
  );
};

export default FeatureContainer;
