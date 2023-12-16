import Image from 'next/image';

interface IBrandProps {}

const Brand: React.FC<IBrandProps> = (props) => {
  const height = 24.15;
  return (
    <div className="flex w-full items-center justify-center flex-wrap py-8 px-8 md:px-12 lg:px-24 gap-12 mb-[80px]">
      <div>
        <Image
          src="/google.png"
          height={height}
          width={71.1}
          alt="google logo"
        />
      </div>
      <div>
        <Image
          src="/slack.png"
          height={height}
          width={95.83}
          alt="slack logo"
        />
      </div>
      <div>
        <Image
          src="/atlassian.png"
          height={height}
          width={112.43}
          alt="atlassian logo"
        />
      </div>
      <div>
        <Image
          src="/dropbox.png"
          height={height}
          width={120.74}
          alt="dropbox logo"
        />
      </div>
      <div>
        <Image
          src="/shopify.png"
          height={height}
          width={84.52}
          alt="shopify logo"
        />
      </div>
    </div>
  );
};

export default Brand;
