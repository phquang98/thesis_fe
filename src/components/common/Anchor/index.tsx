import { Link } from "react-router-dom";

type AnchorProps = {
  className?: string;
  key?: string;
  anchorArrival: string;
  displayText: string;
  styledFontSize?: string;
  styledTextColor?: string;
};

const Anchor = (props: AnchorProps): JSX.Element => {
  const { className, anchorArrival, displayText } = props;

  return (
    <>
      <Link className={className} to={anchorArrival}>
        {displayText}
      </Link>
    </>
  );
};

export default Anchor;
