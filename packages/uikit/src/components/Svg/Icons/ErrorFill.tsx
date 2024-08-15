import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props}>
      <mask id="mask0_405_15385" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g>
        <path d="M9.99292 14.4004C10.3002 14.4004 10.5601 14.2964 10.7727 14.0886C10.9852 13.8807 11.0915 13.6232 11.0915 13.3159C11.0915 13.0087 10.9876 12.7468 10.7797 12.5303C10.5719 12.3138 10.3143 12.2056 10.007 12.2056C9.6998 12.2056 9.43989 12.3124 9.22732 12.5259C9.01476 12.7395 8.90848 12.9999 8.90848 13.3072C8.90848 13.6144 9.01241 13.8734 9.22026 14.0842C9.4281 14.295 9.68566 14.4004 9.99292 14.4004ZM9.99559 11.0235C10.2775 11.0235 10.5189 10.9242 10.7197 10.7255C10.9204 10.5268 11.0208 10.2858 11.0208 10.0027V6.77353C11.0208 6.49037 10.9219 6.24945 10.724 6.05076C10.5262 5.85205 10.2863 5.75269 10.0044 5.75269C9.72246 5.75269 9.48111 5.85205 9.28032 6.05076C9.07953 6.24945 8.97913 6.49037 8.97913 6.77353V10.0027C8.97913 10.2858 9.07807 10.5268 9.27594 10.7255C9.4738 10.9242 9.71369 11.0235 9.99559 11.0235ZM10.0057 18.4004C8.84187 18.4004 7.75033 18.1819 6.73111 17.7449C5.71187 17.308 4.82029 16.7076 4.05636 15.9436C3.29241 15.1797 2.69197 14.2884 2.25503 13.2697C1.81808 12.2511 1.59961 11.158 1.59961 9.99044C1.59961 8.82289 1.81808 7.73297 2.25503 6.72069C2.69197 5.7084 3.29241 4.82029 4.05636 4.05636C4.82029 3.29242 5.71158 2.69197 6.73023 2.25503C7.74889 1.81808 8.84199 1.59961 10.0095 1.59961C11.1771 1.59961 12.267 1.81808 13.2793 2.25503C14.2916 2.69197 15.1797 3.29242 15.9436 4.05636C16.7076 4.82029 17.308 5.70996 17.7449 6.72536C18.1819 7.74076 18.4004 8.83039 18.4004 9.99424C18.4004 11.1581 18.1819 12.2496 17.7449 13.2689C17.308 14.2881 16.7076 15.1797 15.9436 15.9436C15.1797 16.7076 14.29 17.308 13.2746 17.7449C12.2592 18.1819 11.1696 18.4004 10.0057 18.4004Z" />
      </g>
    </Svg>
  );
};

export default Icon;