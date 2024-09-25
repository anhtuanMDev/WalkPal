import Svg, {Path, Rect} from 'react-native-svg';
import {getSize} from '../../utils/responsive';

<svg
  width="22"
  height="22"
  viewBox="0 0 22 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10.0834 19.0208C5.15171 19.0208 1.14587 15.015 1.14587 10.0833C1.14587 5.15166 5.15171 1.14583 10.0834 1.14583C15.015 1.14583 19.0209 5.15166 19.0209 10.0833C19.0209 15.015 15.015 19.0208 10.0834 19.0208ZM10.0834 2.52083C5.91254 2.52083 2.52087 5.91249 2.52087 10.0833C2.52087 14.2542 5.91254 17.6458 10.0834 17.6458C14.2542 17.6458 17.6459 14.2542 17.6459 10.0833C17.6459 5.91249 14.2542 2.52083 10.0834 2.52083Z"
    fill="#1A1E25"
  />
  <path
    d="M18.48 20.8908C18.4066 20.8908 18.3333 20.8817 18.2691 20.8725C17.8383 20.8175 17.0591 20.5242 16.6191 19.2133C16.39 18.5258 16.4725 17.8383 16.8483 17.3158C17.2241 16.7933 17.8566 16.5 18.5808 16.5C19.5158 16.5 20.2491 16.8575 20.5791 17.49C20.9091 18.1225 20.8175 18.9292 20.295 19.7083C19.6441 20.6892 18.9383 20.8908 18.48 20.8908ZM17.93 18.7825C18.0858 19.2592 18.3058 19.4975 18.4525 19.5158C18.5991 19.5342 18.8741 19.36 19.1583 18.9475C19.4241 18.5533 19.4425 18.2692 19.3783 18.1408C19.3141 18.0125 19.0575 17.875 18.5808 17.875C18.2966 17.875 18.0858 17.9667 17.9666 18.1225C17.8566 18.2783 17.8383 18.5167 17.93 18.7825Z"
    fill="#1A1E25"
  />
</svg>;

export const MagnifyingGlass = ({
  width = 24,
  height = 24,
  fill = '#1A1E25',
}) => (
  <Svg
    width={getSize.m(width)}
    height={getSize.m(height)}
    fill="none"
    viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M10.083 19.02c-4.931 0-8.937-4.005-8.937-8.937 0-4.931 4.006-8.937 8.937-8.937 4.932 0 8.938 4.006 8.938 8.937 0 4.932-4.006 8.938-8.938 8.938Zm0-16.5c-4.17 0-7.562 3.392-7.562 7.563 0 4.171 3.392 7.563 7.562 7.563 4.171 0 7.563-3.392 7.563-7.563 0-4.17-3.392-7.562-7.563-7.562ZM18.48 20.89a1.5 1.5 0 0 1-.21-.018c-.432-.055-1.21-.348-1.65-1.659-.23-.687-.148-1.375.228-1.897.376-.523 1.009-.816 1.733-.816.935 0 1.668.358 1.998.99.33.633.238 1.44-.284 2.218-.65.981-1.357 1.183-1.815 1.183Zm-.55-2.108c.156.477.376.715.523.734.146.018.421-.156.705-.568.266-.395.284-.679.22-.807-.064-.128-.32-.266-.797-.266-.284 0-.495.092-.614.247-.11.156-.129.395-.037.66Z"
    />
  </Svg>
);

export const ArrowDown = ({width = 24, height = 24, fill = '#1A1E25'}) => (
  <Svg
    width={getSize.m(width)}
    height={getSize.m(height)}
    fill="none"
    viewBox="0 0 24 24">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m13.28 5.967-4.347 4.346a1.324 1.324 0 0 1-1.866 0L2.72 5.967"
    />
  </Svg>
);

export const Slider = ({width = 24, height = 24, fill = '#1A1E25'}) => (
  <Svg
    width={getSize.m(width)}
    height={getSize.m(height)}
    fill="none"
    viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M16.968 7.563a.822.822 0 0 0 .825-.825V2.475a.822.822 0 0 0-.825-.825.822.822 0 0 0-.825.825v4.263c0 .449.375.825.825.825ZM11 14.438a.822.822 0 0 0-.825.824v4.263c0 .458.367.825.825.825a.822.822 0 0 0 .825-.825v-4.262a.827.827 0 0 0-.825-.825ZM5.033 7.563a.822.822 0 0 0 .825-.825V2.475a.822.822 0 0 0-.825-.825.822.822 0 0 0-.825.825v4.263c0 .449.366.825.825.825ZM6.737 9.322h-3.41a.822.822 0 0 0-.825.826c0 .458.367.825.825.825h.88v8.552c0 .458.367.825.825.825a.822.822 0 0 0 .825-.825v-8.552h.88a.822.822 0 0 0 .825-.825.827.827 0 0 0-.825-.826ZM18.672 9.322h-3.41a.822.822 0 0 0-.825.826c0 .458.367.825.825.825h.88v8.552c0 .458.367.825.826.825a.822.822 0 0 0 .825-.825v-8.552h.88a.822.822 0 0 0 .825-.825.822.822 0 0 0-.826-.826ZM12.705 11.027h-.88V2.476A.822.822 0 0 0 11 1.65a.822.822 0 0 0-.825.825v8.552h-.88a.822.822 0 0 0-.825.825c0 .459.367.825.825.825h3.41a.822.822 0 0 0 .825-.825.822.822 0 0 0-.825-.825Z"
    />
  </Svg>
);

export const ArrowBack = ({width = 24, height = 24, fill = '#1A1E25'}) => (
  <Svg
    width={getSize.m(width)}
    height={getSize.m(height)}
    fill="none"
    viewBox="0 0 24 24">
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12.5H3.5m0 0L10 6m-6.5 6.5L10 19"
    />
  </Svg>
);

export const Menu = ({width = 24, height = 24, fill = '#1A1E25'}) => (
    <Svg
      width={getSize.m(width)}
      height={getSize.m(height)}
      fill="none"
      viewBox="0 0 24 24">
      <Rect width={17} height={2} x={4} y={5} fill={fill} rx={1} />
      <Rect width={17} height={2} x={4} y={11} fill={fill} rx={1} />
      <Rect width={8} height={2} x={4} y={17} fill={fill} rx={1} />
    </Svg>
  );
