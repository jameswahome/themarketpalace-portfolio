import Link from "next/link";
import { Fragment, useState, useEffect, useRef } from "react";

import Image from "next/image";

function Header() {
  const [showNotification, setShowNotification] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const [search, setSearch] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const closeSignupModal = () => {
    setIsLogin(false);
  };
  const closeSearch = () => {
    setSearch(false);
  };

  return (
    <Fragment>
      <nav className="w-full text-white bg-blue h-16 sticky top-0 animated z-40 ">
        <div className="flex -mt-2 w-full flex-col  px-4 mx-auto  ">
          <div className="flex flex-row items-center justify-between ">
            <div>
              <Link href="/">
                <a className="tracking-widest rounded-lg focus:outline-none focus:shadow-outline">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20"
                    viewBox="0 0 300.000000 137.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {" "}
                    <g
                      transform="translate(0.000000,137.000000) scale(0.050000,-0.050000)"
                      fill="#000000"
                      stroke="none"
                    >
                      {" "}
                      <path d="M2660 2689 c-584 -153 -985 -713 -956 -1332 9 -170 56 -341 56 -202 0 60 68 227 134 330 30 47 74 149 97 228 258 878 1453 1038 1907 254 37 -64 110 -180 162 -257 110 -163 177 -288 212 -400 25 -78 25 -75 27 102 6 861 -807 1494 -1639 1277z"></path>{" "}
                      <path d="M2464 2008 c-452 -225 -882 -1128 -537 -1128 45 0 248 240 353 418 246 415 382 453 571 157 244 -381 329 -388 538 -42 133 222 263 262 358 112 266 -425 316 -485 405 -485 211 0 -35 603 -335 820 -162 117 -255 81 -405 -155 -165 -261 -268 -262 -413 -5 -190 334 -326 413 -535 308z"></path>{" "}
                      <path d="M0 680 c0 -34 13 -40 85 -40 l85 0 -7 -210 -7 -210 52 0 52 0 0 210 0 210 80 0 c67 0 80 7 80 40 0 37 -13 40 -210 40 -197 0 -210 -3 -210 -40z"></path>{" "}
                      <path d="M480 490 c0 -126 -2 -237 -5 -245 -3 -8 15 -18 40 -21 42 -6 45 0 45 112 0 227 146 243 156 18 6 -128 9 -136 50 -130 41 6 44 15 38 146 -8 185 -83 255 -205 189 -36 -19 -39 -13 -39 70 0 78 -6 91 -40 91 -38 0 -40 -13 -40 -230z"></path>{" "}
                      <path d="M1320 470 c0 -235 2 -250 39 -250 36 0 40 16 45 185 l6 185 83 -117 83 -117 77 111 c104 151 115 143 101 -67 l-11 -180 48 0 49 0 0 250 0 250 -55 0 c-44 0 -69 -21 -123 -100 -84 -123 -87 -123 -167 0 -52 79 -76 99 -120 100 l-55 0 0 -250z"></path>{" "}
                      <path d="M2680 470 c0 -237 2 -250 40 -250 34 0 40 14 41 85 l0 85 75 -85 c46 -54 91 -86 119 -85 62 0 57 16 -35 110 l-80 82 70 68 c82 79 87 100 25 100 -27 0 -70 -30 -109 -75 l-64 -75 -1 145 c-1 131 -5 145 -41 145 -38 0 -40 -13 -40 -250z"></path>{" "}
                      <path d="M3740 470 l0 -250 50 0 c45 0 50 8 50 80 l0 80 111 0 c139 0 209 57 209 170 0 126 -66 170 -259 170 l-161 0 0 -250z m309 139 c73 -74 18 -149 -110 -149 l-99 0 0 90 0 90 89 0 c53 0 100 -12 120 -31z"></path>{" "}
                      <path d="M4640 470 c0 -246 1 -250 45 -250 44 0 45 5 47 250 2 250 2 250 -45 250 -47 0 -47 -1 -47 -250z"></path>{" "}
                      <path d="M3498 665 c-2 -8 -1 -31 1 -50 2 -23 -10 -35 -38 -35 -28 0 -41 -13 -41 -40 0 -27 13 -40 40 -40 36 0 40 -13 40 -119 0 -131 25 -161 130 -161 67 0 62 67 -5 76 -74 11 -68 204 6 204 66 0 60 67 -6 76 -33 5 -45 20 -45 55 0 46 -76 77 -82 34z"></path>{" "}
                      <path d="M929 531 c-156 -156 33 -382 240 -288 76 35 31 76 -70 62 -75 -10 -139 16 -139 57 0 10 63 18 140 18 150 0 151 1 118 97 -40 115 -199 144 -289 54z m200 -42 c45 -46 41 -49 -74 -48 l-105 0 47 40 c57 47 90 49 132 8z"></path>{" "}
                      <path d="M1969 531 c-142 -142 64 -423 210 -286 21 20 28 20 35 0 5 -14 27 -25 48 -25 35 0 38 16 38 180 0 164 -3 180 -38 180 -21 0 -43 -11 -48 -25 -7 -20 -14 -20 -35 0 -46 43 -156 30 -210 -24z m223 -81 c58 -89 -80 -198 -163 -129 -36 29 -38 122 -4 156 36 36 136 20 167 -27z"></path>{" "}
                      <path d="M2380 400 c0 -167 3 -180 40 -180 35 0 40 13 40 118 0 132 30 174 108 154 48 -12 85 30 61 70 -16 25 -124 23 -140 -4 -10 -15 -20 -15 -35 0 -58 58 -74 23 -74 -158z"></path>{" "}
                      <path d="M3089 531 c-157 -157 53 -397 254 -290 66 36 12 77 -84 64 -75 -10 -139 16 -139 57 0 10 64 18 143 18 l142 0 -13 65 c-26 135 -203 186 -303 86z m200 -42 c45 -46 41 -49 -74 -48 l-105 0 47 40 c57 47 90 49 132 8z"></path>{" "}
                      <path d="M4253 539 c-73 -57 -76 -210 -7 -276 52 -48 170 -59 211 -18 20 20 28 19 42 -3 43 -69 67 -8 63 159 -5 189 -8 197 -62 164 -24 -15 -43 -17 -50 -5 -22 35 -143 21 -197 -21z m203 -63 c63 -63 14 -176 -76 -176 -66 0 -100 34 -100 100 0 66 34 100 100 100 29 0 63 -11 76 -24z"></path>{" "}
                      <path d="M4849 531 c-143 -144 63 -425 210 -286 21 20 28 20 35 0 5 -14 26 -25 45 -25 32 0 36 20 36 180 0 160 -4 180 -36 180 -19 0 -40 -11 -45 -25 -7 -20 -14 -20 -35 0 -46 43 -156 30 -210 -24z m207 -55 c63 -63 14 -176 -76 -176 -66 0 -100 34 -100 100 0 66 34 100 100 100 29 0 63 -11 76 -24z"></path>{" "}
                      <path d="M5289 531 c-152 -152 42 -392 234 -290 63 34 12 79 -74 65 -84 -14 -129 19 -129 94 0 71 44 107 120 96 72 -11 126 35 79 65 -59 37 -178 21 -230 -30z"></path>{" "}
                      <path d="M5649 531 c-157 -157 53 -397 254 -290 66 36 12 77 -84 64 -48 -6 -90 -1 -109 15 -59 49 -30 63 110 57 l140 -7 0 56 c0 85 -80 154 -180 154 -60 0 -95 -13 -131 -49z m192 -32 c68 -36 42 -59 -66 -58 l-105 0 47 40 c54 45 71 47 124 18z"></path>{" "}
                    </g>{" "}
                  </svg>
                </a>
              </Link>
            </div>

            <div className="flex flex-row items-center flex-grow justify-end   md:flex md:justify-end md:flex-row">
              {/* search icon */}
              {/* <div className="relative">
                <Link href="/search">
                  <a
                    className="flex items-center px-3  text-lg font-semibold text-primary rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    ref={trigger}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Header;
