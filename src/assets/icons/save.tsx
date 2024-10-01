import { use, useState } from "react";
function Save({className}) {

  const [Save,setSave] = useState(false)

  function handleSave() {
    setSave(!Save)
  }

  return (
    <>
      <svg onClick={handleSave} className={className}
        width="30"
        height="36"
        viewBox="0 0 30 36"
        fill={!Save ? "none" : "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_433_420)">
          <path
            d="M5.01221 27.2404V1H25.3025V27.2404L15.3551 22.958L15.1574 22.8729L14.9597 22.958L5.01221 27.2404Z"
            stroke="#434343"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_433_420"
            x="0.512207"
            y="0.5"
            width="29.2905"
            height="35.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_433_420"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_433_420"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default Save;
