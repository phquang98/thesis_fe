type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <div>This is a Footer</div>
      </div>
    </>
  );
};

export default Footer;
