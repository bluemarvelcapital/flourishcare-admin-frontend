import Image from "next/image";

interface NoDataProps {
  imageUrl: string;
  headerText: string;
  paragraph: string;
}

const NoData: React.FC<NoDataProps> = ({ imageUrl, headerText, paragraph }) => {
  return (
    <div className="mt-10 h-full w-full flex flex-col items-center justify-center text-center">
      <Image
        width={224}
        height={224}
        src={imageUrl}
        alt="logo"
        className="rounded-md object-cover"
      />
      <p className="text-xl mt-8 mb-2  font-medium text-[#0B0B0E]">
        {headerText}
      </p>
      <p className="max-w-80 text-tertiary">{paragraph}</p>
    </div>
  );
};

export default NoData;

