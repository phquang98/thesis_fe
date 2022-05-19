import { IoIosArrowForward } from "react-icons/io";

import Anchor from "../Anchor";
import { StyledAnchor } from "../Anchor/styles";

type FooterProps = {
  className?: string;
};

const footerSection = [
  { title: "Service", data: ["Contact", "RSS", "Sitemap", "Help", "Archive"] },
  { title: "About this site", data: ["Copyright", "Privacy", "Cookies", "Accessibility", "Report vulnerability"] }
];

const Footer = (props: FooterProps): JSX.Element => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        {footerSection.map((ele) => {
          return (
            <div key={ele.title} className="footerSection">
              <span className="footerTitle">{ele.title}</span>

              {ele.data.map((eleData) => {
                return (
                  <div key={eleData} className="footerLink">
                    <IoIosArrowForward className="footerIcon" />
                    {"  "}
                    <StyledAnchor anchorArrival="/" displayText={eleData} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
