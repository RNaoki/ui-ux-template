interface IFeatureProps {
  title: string;
  text?: string;
}

const Feature: React.FC<IFeatureProps> = ({ title, text }) => {
  return (
    <div>
      <div>
        <div className="w-[38px] h-[3px] bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] mb-[10px]" />
        <h1 className="text-[white] text-[24px] font-[800] mb-[26px]">
          {title}
        </h1>
      </div>
      <div className="text-[#81AFDD] text-[16px]">{text}</div>
    </div>
  );
};

export default Feature;
