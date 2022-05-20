type CardProps = {
  className?: string;
  styledHeight: string;
  styledWidth: string;
  children: React.ReactNode;
};

const Card = (props: CardProps): JSX.Element => {
  const { className, children } = props;

  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export default Card;
