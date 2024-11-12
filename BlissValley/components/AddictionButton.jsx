import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";
const BlueBoot = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={150}
    viewBox="0 0 112.5 30"
    height={40}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M14.61.336h82.742v28.309H14.609Zm0 0" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#a)">
      <Path
        d="M85.543 28.695h2.363v-2.36h4.727v-2.362h2.363v-4.727h2.363V9.793h-2.363V5.066h-2.363V2.703h-4.727V.34H24.102v2.363h-4.727v2.363h-2.36v4.727h-2.363v9.453h2.364v4.727h2.359v2.363h4.727v2.36Zm0 0"
        fillRule="evenodd"
      />
    </G>
    <Path
      fill="#9fc0ff"
      d="M85.543 26.336h2.363v-2.363h4.727v-4.727h2.363V9.793h-2.363V5.066h-4.727V2.703H24.102v2.363h-4.727v4.727h-2.36v9.453h2.36v4.727h4.727v2.363Zm0 0"
      fillRule="evenodd"
    />
    <Path
      fill="#8cbaff"
      d="M85.543 26.336h2.363v-2.363h4.727v-4.727h2.363v-7.09h-2.363V9.793H90.27V7.43H21.738v2.363h-2.363v2.363h-2.36v7.09h2.36v4.727h4.727v2.363Zm0 0"
      fillRule="evenodd"
    />
    <Path
      fill="#6b80c2"
      d="M85.543 26.336h2.363v-2.363h4.727v-4.727h2.363V14.52h-2.363v4.726H90.27v2.363h-4.727v2.364H26.465v-2.364h-4.727v-2.363h-2.363V14.52h-2.36v4.726h2.36v4.727h4.727v2.363Zm0 0"
      fillRule="evenodd"
    />
    <Path
      fill="#cfe0ff"
      d="M17.016 12.156h2.359V9.793h2.363V7.43h4.727V5.066h4.726V2.703h-7.09v2.363h-4.726v4.727h-2.36Zm0 0"
      fillRule="evenodd"
    />
  </Svg>
);
export default BlueBoot;
