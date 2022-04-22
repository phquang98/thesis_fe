import { useState } from "react";

type ListProps = {
  className?: string;
};

const List = (props: ListProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>Transaction #1: sent 100$ to Peacekeeper</p>
        <p>Transaction #2: sent 200$ to Peacekeeper</p>
        <p>Transaction #3: received 356$ from Mechanic</p>
        <p>Transaction #4: send 477$ to Therapist</p>
        <p>Transaction #5: received 89$ to Dealer</p>
      </div>
    </>
  );
};

export default List;
