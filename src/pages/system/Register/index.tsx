import { useState } from "react";
import { StyledCard } from "../../../components/common/Card/styles";
import { StyledRegisterForm } from "../../../components/RegisterForm/styles";
import { useAuth } from "../../../hooks/useAuth";
import { TRegisterReqBody } from "../../../types/system";

type RegisterPageProps = {
  className?: string;
};

const RegisterPage = (props: RegisterPageProps): JSX.Element => {
  const { className } = props;
  const auth = useAuth();

  const [iptRegisterName, setIptRegisterName] = useState<string>("");
  const [iptRegisterEmail, setIptRegisterEmail] = useState<string>("");
  const [iptRegisterAccName, setIptRegisterAccName] = useState<string>("");
  const [iptRegisterAccPwd, setIptRegisterAccPwd] = useState<string>("");

  const submitRegisterDataToServer = async (): Promise<void> => {
    const sendToServer: TRegisterReqBody = {
      clientData: {
        name: iptRegisterName,
        email: iptRegisterEmail,
        accountName: iptRegisterAccName,
        accountPwd: iptRegisterAccPwd
      }
    };
    console.log("click the register btn", sendToServer);
  };

  return (
    <>
      <div className={className}>
        <h3>Register Form</h3>
        <StyledCard className="registerCard" styledHeight="14rem" styledWidth="10rem">
          <StyledRegisterForm
            changeStateRegisterName={setIptRegisterName}
            changeStateRegisterEmail={setIptRegisterEmail}
            changeStateRegisterAccName={setIptRegisterAccName}
            changeStateRegisterAccPwd={setIptRegisterAccPwd}
            registerBtnFormClick={submitRegisterDataToServer}
          />
        </StyledCard>
      </div>
    </>
  );
};

export default RegisterPage;
