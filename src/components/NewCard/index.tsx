import { StyledCard } from "../common/Card/styles";

type NewCardProps = {
  className?: string;
  bgURL: string;
  newTitle: string;
  newInfo: string;
};

const NewCard = (props: NewCardProps): JSX.Element => {
  const { className, newTitle, newInfo } = props;

  return (
    <>
      <StyledCard className={className} styledHeight="18rem" styledWidth="12rem">
        <div className="newImg"></div>
        <p className="newTitle">{newTitle}</p>
        <p className="newInfo">{newInfo}</p>
      </StyledCard>
    </>
  );
};

export default NewCard;
