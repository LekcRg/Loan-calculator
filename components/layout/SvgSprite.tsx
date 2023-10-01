const SvgSprite = () => {

  return (
    <svg width="0" height="0" className="svg-sprite">
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="arr-right">
        <path d="M6.375 3.75L11.625 9L6.375 14.25" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
        <path d="M8 0C3.58267 0 0 3.582 0 8C0 11.5347 2.292 14.5333 5.47133 15.5913C5.87067 15.6653 6 15.4173 6 15.2067V13.7173C3.77467 14.2013 3.31133 12.7733 3.31133 12.7733C2.94733 11.8487 2.42267 11.6027 2.42267 11.6027C1.69667 11.106 2.478 11.1167 2.478 11.1167C3.28133 11.1727 3.704 11.9413 3.704 11.9413C4.41733 13.164 5.57533 12.8107 6.032 12.606C6.10333 12.0893 6.31067 11.736 6.54 11.5367C4.76333 11.3333 2.89533 10.6473 2.89533 7.58267C2.89533 6.70867 3.208 5.99533 3.71933 5.43533C3.63667 5.23333 3.36267 4.41933 3.79733 3.318C3.79733 3.318 4.46933 3.10333 5.998 4.138C6.636 3.96067 7.32 3.872 8 3.86867C8.68 3.872 9.36467 3.96067 10.004 4.138C11.5313 3.10333 12.202 3.318 12.202 3.318C12.6373 4.42 12.3633 5.234 12.2807 5.43533C12.794 5.99533 13.104 6.70933 13.104 7.58267C13.104 10.6553 11.2327 11.332 9.45133 11.53C9.738 11.778 10 12.2647 10 13.0113V15.2067C10 15.4193 10.128 15.6693 10.534 15.5907C13.7107 14.5313 16 11.5333 16 8C16 3.582 12.418 0 8 0Z" fill="#929292"></path>
      </symbol>
      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 24" id="logo">
        <g>
          <path d="M0 23.8046V1.79493H2.62872L12.6948 18.428H11.2842L21.2221 1.79493H23.8508L23.8828 23.8046H20.8053L20.7733 6.54274H21.5106L12.6627 21.132H11.1881L2.27608 6.54274H3.07752V23.8046H0Z" fill="currentColor"></path>
          <path d="M26.3833 3.93931C24.556 4.01162 23.5975 1.79493 24.8927 0.574967C26.082 -0.607268 28.528 0.156783 28.4671 1.92699C28.4831 3.06835 27.5727 3.9676 26.3833 3.93931ZM24.8446 23.8109V7.14643H27.9221V23.8109H24.8446Z" fill="currentColor"></path>
          <path d="M37.9561 6.98293C42.4153 6.9452 45.0953 9.77816 45.0087 14.2147V23.8046H41.9312V14.5606C41.9505 11.5106 40.4117 9.69327 37.347 9.68698C33.9457 9.64296 31.8812 11.8722 31.9613 15.2208V23.8046H28.8838V7.14014H31.8331V11.6364L31.3522 10.4416C32.5736 8.05826 35.1735 6.9735 37.9561 6.98293Z" fill="currentColor"></path>
          <path d="M47.3105 3.93302C45.4832 4.00534 44.5247 1.78864 45.8198 0.568678C47.0091 -0.613557 49.4551 0.150494 49.3942 1.9207C49.4102 3.06206 48.4998 3.96132 47.3105 3.93302ZM45.7717 23.8046V7.14015H48.8492V23.8046H45.7717Z" fill="currentColor"></path>
          <path d="M70.7445 6.98293C75.1877 6.94835 77.7875 9.81275 77.701 14.2147V23.8046H74.6235V14.5606C74.6427 11.5798 73.2322 9.69956 70.2316 9.68698C66.9168 9.63982 65.0511 12.0106 65.1344 15.2208V23.8046H62.0569V14.5606C62.0697 11.5641 60.6977 9.69956 57.665 9.68698C54.3888 9.6461 52.4813 12.0357 52.5679 15.2208V23.8046H49.4904V7.14014H52.4397V11.5735L51.9588 10.4416C53.6546 6.77541 59.3192 6.01451 62.5057 8.16202C63.6822 8.94808 64.4516 10.1366 64.8139 11.7307L63.5636 11.2277C64.6728 8.46387 67.6478 6.94835 70.7445 6.98293Z" fill="currentColor"></path>
          <path d="M79.9065 3.93302C78.0793 4.00534 77.1207 1.78864 78.4159 0.568678C79.602 -0.613557 82.0512 0.150494 81.9903 1.9207C82.0031 3.06206 81.0959 3.96132 79.9065 3.93302ZM78.3678 23.8046V7.14015H81.4453V23.8046H78.3678Z" fill="currentColor"></path>
          <path d="M79.5219 9.63038V7.14643H90.3573V9.63038H79.5219ZM87.7927 23.9996C84.401 24.0153 82.3878 22.1287 82.407 18.7801V3.49911H85.4846V18.6544C85.4846 19.5568 85.7154 20.2485 86.1738 20.7296C87.1612 21.8143 89.511 21.5911 90.5496 20.6667L91.5114 22.8362C90.5272 23.6789 89.1103 23.9933 87.7927 23.9996Z" fill="currentColor"></path>
          <path d="M97.3685 23.9933C92.2585 24.0939 88.1423 20.5472 88.2321 15.4724C88.1263 10.69 91.8866 6.90118 96.7594 6.98293C102.158 6.89175 105.697 11.3188 105.094 16.4785H90.6364V14.309H103.491L102.241 15.0636C102.379 11.9854 99.9234 9.43544 96.7594 9.52977C93.2363 9.49518 91.0179 12.2778 91.2455 15.6296C91.2326 17.774 92.3066 19.6542 94.2268 20.6289C96.7465 21.9024 100.443 21.5376 102.369 19.3398L104.068 21.2892C102.411 23.1821 99.9811 23.9933 97.3685 23.9933Z" fill="currentColor"></path>
        </g>
      </symbol>

      <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" id="plus">
        <path d="M13.6667 7.83333H10C9.63181 7.83333 9.33333 7.53486 9.33333 7.16667V3.5C9.33333 2.94772 8.88562 2.5 8.33333 2.5C7.78105 2.5 7.33333 2.94772 7.33333 3.5V7.16667C7.33333 7.53486 7.03486 7.83333 6.66667 7.83333H3C2.44772 7.83333 2 8.28105 2 8.83333C2 9.38562 2.44772 9.83333 3 9.83333H6.66667C7.03486 9.83333 7.33333 10.1318 7.33333 10.5V14.1667C7.33333 14.719 7.78105 15.1667 8.33333 15.1667C8.88562 15.1667 9.33333 14.719 9.33333 14.1667V10.5C9.33333 10.1318 9.63181 9.83333 10 9.83333H13.6667C14.219 9.83333 14.6667 9.38562 14.6667 8.83333C14.6667 8.28105 14.219 7.83333 13.6667 7.83333Z" fill="currentColor"/>
      </symbol>
    </svg>
  );
};

export default SvgSprite;