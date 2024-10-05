import { useState } from "react";
function LikeIcon({className ,onClick, fill, stroke}) {
  

  return (
    <>
      <svg onClick={onClick} className={className}
        width="34"
        height="28"
        viewBox="0 0 34 28"
        fill={fill}
        stroke="none"
        strokeOpacity={stroke}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5774 4.46719L17 5.13565L17.4226 4.46719C18.9538 2.04538 21.6534 0.5 24.7273 0.5C29.5481 0.5 33.5 4.47307 33.5 9.33333C33.5 11.5172 32.5029 13.7473 30.9396 15.8931C29.38 18.0337 27.2898 20.045 25.1821 21.7807C23.077 23.5144 20.9693 24.961 19.3866 25.9748C18.5957 26.4814 17.9371 26.8791 17.477 27.1498C17.2802 27.2655 17.1198 27.3579 17.001 27.4257C16.882 27.3574 16.7214 27.2641 16.5244 27.1474C16.0642 26.8747 15.4055 26.4742 14.6146 25.9646C13.0317 24.9447 10.9238 23.4907 8.81838 21.752C6.71052 20.0113 4.61996 17.9973 3.06013 15.8599C1.49632 13.7171 0.5 11.4969 0.5 9.33333C0.5 4.47307 4.45194 0.5 9.27273 0.5C12.3466 0.5 15.0462 2.04538 16.5774 4.46719Z"
          stroke="#434343"
        />
      </svg>
    </>
  );
}

export default LikeIcon;    