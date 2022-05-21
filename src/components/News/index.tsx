import { StyledNewCard } from "../NewCard/styles";

type NewsProps = {
  className?: string;
  newData: { bgURL: string; newTitle: string; newInfo: string }[];
};

const News = (props: NewsProps): JSX.Element => {
  const { className, newData } = props;

  return (
    <>
      <div className={className}>
        {newData.map((ele, index) => {
          return <StyledNewCard key={index} bgURL={ele.bgURL} newTitle={ele.newTitle} newInfo={ele.newInfo} />;
        })}
      </div>
    </>
  );
};

export default News;
