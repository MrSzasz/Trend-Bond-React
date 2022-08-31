
const FooterCard = ({ children, name, data }) => {
  return (
    <a
      className="flex flex-col justify-center items-center gap-2"
      href="google.com"
    >
      {children}
      <div>
        <span className="text-gray-500">{name}</span>
        <p>{data}</p>
      </div>
    </a>
  );
};

export default FooterCard;