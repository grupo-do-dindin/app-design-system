
type LogoProps = {
  href?: string;
  size?: number;
};

export const Logo = ({ href = "/", size = 50 }: LogoProps) => {
  const content = (
    <>
      <img src="/icon.svg" alt="DinDin" width={size} height={size} />
      <span className="font-medium text-green-800 dark:text-green-200">
        DinDin
      </span>
    </>
  );

  if (!href) {
    return <span className="flex items-center gap-2">{content}</span>;
  }

  return (
    <a href={href} className="flex items-center gap-2">
      {content}
    </a>
  );
};
