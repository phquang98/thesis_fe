import { Outlet } from "react-router-dom";
import { StyledErrorNoti } from "../components/common/ErrorNoti/styles";
import { StyledFooter } from "../components/common/Footer/styles";
import { StyledHeader } from "../components/common/Header/styles";

type LayoutProps = {
  className?: string;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { className } = props;

  // const [serverInfo, setServerInfo] = useState<TServerSuccess | TServerError | null>(null);
  // const { isLoading, isSuccess, isFailure, serverRes, serverErr } = useAPI();

  // useEffect(() => {
  //   if (isLoading) {
  //     setServerInfo(null);
  //   }
  //   if (isSuccess) {
  //     setServerInfo(serverRes);
  //   }
  //   if (isFailure) {
  //     setServerInfo(serverErr);
  //   }
  // }, [isLoading, isSuccess, isFailure, serverRes, serverErr]);

  return (
    <>
      <div className={className}>
        <StyledHeader />
        <StyledErrorNoti />

        {/* {isLoading && <StyledErrorNoti serverInfoDisplay={null} />}
        {isSuccess && <StyledErrorNoti serverInfoDisplay={serverRes} />}
        {isFailure && <StyledErrorNoti serverInfoDisplay={serverErr} />} */}

        <Outlet />
        <StyledFooter />
      </div>
    </>
  );
};

export default Layout;
