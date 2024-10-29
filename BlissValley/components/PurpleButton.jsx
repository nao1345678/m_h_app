import * as React from "react";
import Svg, { Defs, ClipPath, Path, Mask, G } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const PurpleButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={300}
    viewBox="0 0 224.88 37.5"
    height={50}
    {...props}
  >
    <Defs>
      <ClipPath id="b">
        <Path d="M29.133.477H195.66v36.27H29.133Zm0 0" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M29.133.477H195.66v36.27H29.133Zm0 0" />
      </ClipPath>
      <ClipPath id="f">
        <Path d="M1 1h150v27.867H1Zm0 0" />
      </ClipPath>
      <ClipPath id="e">
        <Path d="M0 0h152v29H0z" />
      </ClipPath>
      <Mask id="d">
        <G filter="url(#a)">
          <Path fillOpacity={0.3} d="M-22.488-3.75h269.856v45H-22.488z" />
        </G>
      </Mask>
    </Defs>
    <G clipPath="url(#b)">
      <Path d="M195.672 14.328v8.348h-2.75v5.547h-2.754v2.754h-2.754v2.796h-5.547v2.75H43.051v-2.75h-5.504V31.02h-2.754v-2.75h-2.84v-5.594H29.2v-8.348h2.754V8.824h2.754V6.07h2.75V3.23h5.55V.477H181.82V3.23h5.551v2.754h2.754v2.75h2.75v5.551h2.797Zm0 0" />
    </G>
    <Path
      fill="#9e00df"
      d="M31.953 22.676v-8.348l2.797-5.504 2.797-2.797L43.05 3.23h138.77l5.507 2.797 2.797 2.797 2.797 5.504v8.348l-2.797 5.547-2.797 2.797-5.508 2.753H43.05l-5.503-2.753-2.797-2.797Zm0 0"
    />
    <Path
      fill="#fff"
      d="M181.82 3.23v2.754H43.05V3.23ZM37.547 8.824h5.547V6.07h-5.547ZM43.05 31.02v-2.75h-5.504v2.75Zm-8.3-16.692h2.754V8.824H34.75Zm2.797 13.895v-5.547h-2.754v5.547Zm-5.594-5.547h2.754v-8.348h-2.754Zm0 0"
    />
    <G clipPath="url(#c)">
      <Path d="M43.05 6.027h-5.503V3.23h5.547v2.797Zm-5.503 0h-2.754v2.754h2.754ZM34.75 28.223v2.754h2.754v-2.754Zm2.797 2.797v2.753h5.547V31.02ZM34.75 8.824h-2.797v5.551h2.754v-5.55Zm-2.797 13.852v5.547h2.754v-5.547ZM29.2 14.328v8.348h2.754v-8.348Zm152.62 19.445h5.551V31.02h-5.55Zm5.508-2.753h2.75v-2.75h-2.75Zm2.797-22.196V6.07h-2.754v2.754Zm-2.797-2.797V3.23h-5.55v2.754h5.55Zm2.797 22.196h2.75v-5.547h-2.75Zm2.797-13.895V8.824h-2.754v5.551h2.754Zm0 0v8.348h2.75v-8.348ZM173.477 3.23h8.343V.477H43.05V3.23ZM51.398 33.773h-8.347v2.75h138.77v-2.75Zm0 0" />
    </G>
    <G mask="url(#d)">
      <G clipPath="url(#e)" transform="translate(42 5)">
        <G clipPath="url(#f)">
          <Path d="M1.05 26.02h138.727v2.753H1.051Zm138.77 0h5.551v-2.75h-5.55Zm0-24.993v2.754h5.551V1.027Zm5.508 22.196h2.75v-5.547h-2.75Zm0-19.399v5.551h2.75v-5.55Zm2.797 5.504v8.348h2.75V9.328Zm0 0" />
        </G>
      </G>
    </G>
  </Svg>
);
export default PurpleButton;
