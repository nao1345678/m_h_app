import * as React from "react";
import Svg, { Defs, ClipPath, Path, Mask, G } from "react-native-svg";

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ModifySleep = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={260}
    viewBox="0 0 195 39"
    height={52}
    {...props}
  >
    <Defs>
      <ClipPath id="b">
        <Path d="M16.221 2.588h156.39v33.93H16.221Zm0 0" />
      </ClipPath>
      <ClipPath id="c">
        <Path d="M16.221 2.588h156.39v33.93H16.221Zm0 0" />
      </ClipPath>
      <ClipPath id="f">
        <Path d="M0.52 0.207h140.92v26.459H0.52Zm0 0" />
      </ClipPath>
      <ClipPath id="e">
        <Path d="M0 0h141.96v27.04H0z" />
      </ClipPath>
      <ClipPath id="g">
        <Path d="M0 0h3.961v4.006H0Zm0 0" />
      </ClipPath>
      <ClipPath id="h">
        <Path d="M0 0h3.961v4.006H0Zm0 0" />
      </ClipPath>
      <Mask id="d">
        <G filter="url(#a)">
          <Path fillOpacity={0.3} d="M-19.5 -3.9h234v46.8h-234z" />
        </G>
      </Mask>
    </Defs>
    <G clipPath="url(#b)">
      <Path d="M172.479 15.584v7.83h-2.583V28.621h-2.582v2.582h-2.582v2.624h-5.206v2.582H29.284V33.826h-5.165v-2.582h-2.582v-2.584h-2.667v-5.247h-2.582V15.584h2.582v-5.166h2.584V7.836h2.582V5.169h5.206V2.588H159.484V5.169h5.206v2.584h2.582v2.581h2.584v5.206h2.624Zm0 0" />
    </G>
    <Path
      fill="#ff94d4"
      d="M18.871 23.414V15.584l2.624 -5.166 2.624 -2.624 5.165 -2.624H159.484l5.166 2.624 2.622 2.624 2.624 5.166v7.83l-2.624 5.206 -2.622 2.624 -5.166 2.582H29.284l-5.165 -2.582 -2.624 -2.624Zm0 0"
    />
    <Path
      fill="#fff"
      d="M159.484 5.169v2.584H29.284V5.169ZM24.119 10.418h5.206V7.836H24.119Zm5.165 20.826v-2.583h-5.165v2.584ZM21.495 15.584h2.584v-5.166h-2.584Zm2.624 13.036V23.414h-2.582V28.621ZM18.87 23.414h2.584V15.584h-2.584Zm0 0"
    />
    <G clipPath="url(#c)">
      <Path d="M29.284 7.794h-5.165V5.169h5.206v2.624Zm-5.165 0h-2.582v2.584h2.582ZM21.495 28.621v2.582h2.584V28.621Zm2.624 2.624v2.582h5.206v-2.582Zm-2.624 -20.826h-2.624v5.205h2.584v-5.205Zm-2.624 12.995V28.621h2.584V23.414ZM16.288 15.584v7.83h2.582V15.584ZM159.484 33.826h5.206v-2.582H159.484Zm5.166 -2.582h2.582v-2.584h-2.582Zm2.622 -20.826V7.836h-2.582v2.582Zm-2.622 -2.625V5.169H159.442v2.584h5.206Zm2.622 20.827h2.584V23.414h-2.584Zm2.624 -13.036v-5.166h-2.582v5.206h2.582Zm0 0v7.83h2.583V15.584ZM151.653 5.169h7.83V2.588H29.284V5.169ZM37.115 33.827H29.284v2.582H159.484V33.826Zm0 0" />
    </G>
    <G mask="url(#d)">
      <G clipPath="url(#e)" transform="translate(55 14)">
        <G clipPath="url(#f)">
          <Path d="M0.684 23.965h130.159v2.582H0.684Zm130.199 0h5.206v-2.584h-5.206Zm0 -23.451v2.584h5.206V0.514Zm5.166 20.827h2.582V16.134h-2.582Zm0 -18.202v5.206h2.582V3.138Zm2.622 5.166v7.83h2.584V8.304Zm0 0" />
        </G>
      </G>
    </G>
    <G clipPath="url(#g)">
      <Path d="M3.961 -16.791v7.855H1.377v5.224H-1.206v2.59h-2.584v2.633h-5.208v2.59h-130.296v-2.59h-5.167v-2.59h-2.584V-3.671h-2.667v-5.265h-2.584V-16.791h2.584v-5.182h2.584v-2.592h2.583v-2.673h5.208v-2.592h130.298v2.592h5.208v2.59h2.584v2.592h2.581v5.222h2.627Zm0 0" />
    </G>
    <Path
      fill="silver"
      d="M-149.713 -8.936v-7.855l2.626 -5.182 2.625 -2.632 5.167 -2.633h130.256l5.166 2.633 2.626 2.632 2.624 5.182v7.855L-1.247 -3.711 -3.874 -1.078l-5.166 2.59h-130.256l-5.167 -2.59 -2.624 -2.633Zm0 0"
    />
    <G clipPath="url(#h)">
      <Path d="M-139.295 -24.604h-5.167v-2.633h5.208v2.633Zm-5.167 0h-2.584v2.59h2.584Zm-2.624 20.894v2.59h2.581v-2.59Zm2.624 2.632v2.59h5.208v-2.59Zm-2.624 -20.894h-2.627v5.222h2.584v-5.222Zm-2.627 13.036v5.224h2.584v-5.224Zm-2.584 -7.855v7.855h2.584v-7.855ZM-9.039 1.511h5.208v-2.59h-5.208Zm5.166 -2.59h2.584V-3.671h-2.584Zm2.626 -20.894v-2.592h-2.583v2.592Zm-2.626 -2.632v-2.633h-5.208v2.59h5.208Zm2.626 20.894h2.582v-5.225h-2.581ZM1.377 -16.791v-5.182H-1.206v5.222h2.583Zm0 0v7.855h2.584V-16.791Zm-18.25 -10.447h7.834v-2.592h-130.256v2.592ZM-131.462 1.511h-7.833v2.59h130.256v-2.59Zm0 0" />
    </G>
    <Path
      d="M-139.295 -1.078h130.213v2.59h-130.213Zm130.256 0h5.208V-3.671h-5.208Zm0 -23.526v2.59h5.208v-2.59Zm5.166 20.894h2.584v-5.225h-2.584Zm0 -18.261v5.222h2.584v-5.222Zm2.626 5.182v7.855h2.582v-7.855Zm0 0"
      fillOpacity={0.3}
    />
  </Svg>
);
export default ModifySleep;
