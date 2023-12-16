import Image from 'next/image';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <div className="py-8 px-8 pt-40 md:px-12 lg:px-24 bg-[#031B34] text-[#FFF] flex flex-col items-center  gap-24">
      <h1 className="text-[transparent] bg-gradient-to-r from-[#AE67FA] from-[1.84%] to-[#F49867] to-[102.67%] bg-clip-text text-[62px] font-[800] md:mr-20 tracking-[-0.04rem] max-w-[860px] text-center">
        Do you want to step in to the future before others
      </h1>
      <button className="border-[1px] border-[#FFF] px-4 py-4 font-[18px]">
        Request Early Access
      </button>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-20">
        <div>
          <Image src={'/logo.svg'} width={64} height={16} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-[700]">Links</p>
          <a className="cursor-pointer">Overons</a>
          <a className="cursor-pointer">Social Media</a>
          <a className="cursor-pointer">Counters</a>
          <a className="cursor-pointer">Contact</a>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-[700]">Company</p>
          <a className="cursor-pointer">Terms & Conditions</a>
          <a className="cursor-pointer">Privacy Policy</a>
          <a className="cursor-pointer">Contact</a>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-[700]">Get in touch</p>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <p className="text-[10px]">© 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
