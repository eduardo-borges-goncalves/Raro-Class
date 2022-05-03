import { Logo } from "./style";

export const LogoVertical = () => (
  <Logo>
    <div id="logoDiv">
      <img src={require("../../assets/images/logos-raro/logoRaro.svg").default} alt="Logo Raro" />
      <span>CLASS</span>
    </div>
  </Logo>
);