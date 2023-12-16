interface IArticleProps {
  imgSrc: string;
  date: string;
  text: string;
}

const Article: React.FC<IArticleProps> = ({ imgSrc, date, text }) => {
  return (
    <div className="flex flex-col h-full cursor-pointer">
      <img className="w-full" src={imgSrc} />
      <div className="flex flex-col flex-1 bg-[#042C54] text-[#FFF] relative px-10 py-14">
        <p className="text-[11px]">{date}</p>
        <p className="text-[25px] font-[800]">{text}</p>
        <p className="text-[11px] absolute bottom-[26px]">Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
