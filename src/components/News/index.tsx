import { StyledCard } from "../common/Card/styles";

type NewsProps = {
  className?: string;
  newTitle: string;
  newInfo: string;
};

const News = (props: NewsProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <StyledCard styledHeight="20rem" styledWidth="10rem">
          Hello
        </StyledCard>
      </div>
    </>
  );
};

export default News;
