import Article from '../components/Article';

interface IBlogContainerProps {}

const BlogContainer: React.FC<IBlogContainerProps> = (props) => {
  return (
    <div className="py-8 px-8 md:px-12 lg:px-24 pb-40">
      <h1 className="text-[transparent] bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] bg-clip-text text-[62px] font-[800] md:mr-20 tracking-[-0.04rem]">
        A lot is happening,
        <br /> We are blogging about it.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-28">
        <div className="row-span-2">
          <Article
            imgSrc="/blog01.png"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26, 2021"
          />
        </div>
        <Article
          imgSrc="/blog02.png"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          imgSrc="/blog03.png"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          imgSrc="/blog04.png"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <Article
          imgSrc="/blog05.png"
          text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
      </div>
    </div>
  );
};

export default BlogContainer;
