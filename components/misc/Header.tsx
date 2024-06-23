interface HeaderProps {
  header: string;
  paragraph?: string;
}

const Header: React.FC<HeaderProps> = ({ header, paragraph }) => {
  return (
    <div className="mt-10 flex-1">
        <header className="text-4xl mb-2 text-[#2A2B2B]">{header}</header>
        <p className="text-sm text-[#6A6B6C]">{paragraph}</p>
    </div>
  );
};

export default Header;
