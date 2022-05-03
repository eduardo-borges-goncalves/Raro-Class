import { ReactComponent as LogoRaro } from "../../assets/images/logos-raro/FUNDO ROXO.svg"
import { BannerFaixa, BannerSpan } from "./style";

export const Banner = () => (
  <BannerFaixa>
    <LogoRaro/>
    <BannerSpan>CLASS</BannerSpan>
  </BannerFaixa>
);