import { useState } from "react";

type UserHomePageProps = {
  className?: string;
};

const UserHomePage = (props: UserHomePageProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <p>This is the Home Page</p>
        <p>User Name: ASDASD</p>
        <p>Balance: 690$</p>
        <ul>
          <p>Latest transaction</p>
          <li>Transaction #1: Sent 100$ to Peacekeeper</li>
          <li>Transaction #2: Sent 200$ to Mechanic</li>
          <li>Transaction #3: Received 123$ from Prapor</li>
        </ul>
      </div>
    </>
  );
};

export default UserHomePage;
