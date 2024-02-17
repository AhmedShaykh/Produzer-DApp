// material-ui
import { useTheme } from '@mui/material/styles';
import Logos from 'assets/logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Mantis" width="100" />
         *
         */
        <>
            {/* <svg width="118" height="35" viewBox="0 0 118 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
                    fill={theme.palette.primary.dark}
                />
                <path
                    d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
                    fill="url(#paint0_linear)"
                />
                <path
                    d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
                    fill="url(#paint1_linear)"
                />
                <path
                    d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
                    fill={theme.palette.primary.main}
                />
                <path
                    d="M46.5781 10V26H49.3594V14.9844H49.5078L53.9297 25.9531H56.0078L60.4297 15.0078H60.5781V26H63.3594V10H59.8125L55.0625 21.5937H54.875L50.125 10H46.5781ZM69.8438 26.2422C71.7266 26.2422 72.8516 25.3594 73.3672 24.3516H73.4609V26H76.1797V17.9687C76.1797 14.7969 73.5937 13.8438 71.3047 13.8438C68.7813 13.8438 66.8437 14.9687 66.2188 17.1562L68.8594 17.5312C69.1406 16.7109 69.9375 16.0078 71.3203 16.0078C72.6328 16.0078 73.3516 16.6797 73.3516 17.8594V17.9062C73.3516 18.7188 72.5 18.7578 70.3828 18.9844C68.0547 19.2344 65.8281 19.9297 65.8281 22.6328C65.8281 24.9922 67.5547 26.2422 69.8438 26.2422ZM70.5781 24.1641C69.3984 24.1641 68.5547 23.625 68.5547 22.5859C68.5547 21.5 69.5 21.0469 70.7656 20.8672C71.5078 20.7656 72.9922 20.5781 73.3594 20.2812V21.6953C73.3594 23.0312 72.2813 24.1641 70.5781 24.1641ZM81.8516 18.9687C81.8516 17.2344 82.8984 16.2344 84.3906 16.2344C85.8516 16.2344 86.7266 17.1953 86.7266 18.7969V26H89.5547V18.3594C89.5625 15.4844 87.9219 13.8438 85.4453 13.8438C83.6484 13.8438 82.4141 14.7031 81.8672 16.0391H81.7266V14H79.0234V26H81.8516V18.9687ZM98.4219 14H96.0547V11.125H93.2266V14H91.5234V16.1875H93.2266V22.8594C93.2109 25.1172 94.8516 26.2266 96.9766 26.1641C97.7813 26.1406 98.3359 25.9844 98.6406 25.8828L98.1641 23.6719C98.0078 23.7109 97.6875 23.7812 97.3359 23.7812C96.625 23.7812 96.0547 23.5312 96.0547 22.3906V16.1875H98.4219V14ZM100.787 26H103.615V14H100.787V26ZM102.209 12.2969C103.107 12.2969 103.842 11.6094 103.842 10.7656C103.842 9.91406 103.107 9.22656 102.209 9.22656C101.303 9.22656 100.568 9.91406 100.568 10.7656C100.568 11.6094 101.303 12.2969 102.209 12.2969ZM116.008 17.1719C115.617 15.1406 113.992 13.8438 111.18 13.8438C108.289 13.8438 106.32 15.2656 106.328 17.4844C106.32 19.2344 107.398 20.3906 109.703 20.8672L111.75 21.2969C112.852 21.5391 113.367 21.9844 113.367 22.6641C113.367 23.4844 112.477 24.1016 111.133 24.1016C109.836 24.1016 108.992 23.5391 108.75 22.4609L105.992 22.7266C106.344 24.9297 108.195 26.2344 111.141 26.2344C114.141 26.2344 116.258 24.6797 116.266 22.4062C116.258 20.6953 115.156 19.6484 112.891 19.1562L110.844 18.7188C109.625 18.4453 109.141 18.0234 109.148 17.3281C109.141 16.5156 110.039 15.9531 111.219 15.9531C112.523 15.9531 113.211 16.6641 113.43 17.4531L116.008 17.1719Z"
                    fill={theme.palette.common.black}
                    fillOpacity="0.85"
                />
                <defs>
                    <linearGradient id="paint0_linear" x1="8.62526" y1="14.0888" x2="5.56709" y2="17.1469" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme.palette.primary.darker} />
                        <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="26.2675" y1="14.1279" x2="28.7404" y2="16.938" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme.palette.primary.darker} />
                        <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg> */}
            {/* <svg width="111" height="31" viewBox="0 0 111 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M20.7622 8.43979V18.6934H24.4128V11.644H29.5014C30.0361 11.644 30.4184 11.7776 30.6482 12.0445C30.889 12.3405 31.012 12.71 30.9948 13.0859V18.6934H34.6455V12.5786C34.6455 11.8297 34.4426 11.2287 34.0369 10.7754C33.6313 10.3221 33.0598 10.0775 32.3224 10.0419V9.56119C33.1338 9.24079 33.8408 8.71489 34.3689 8.03929C34.922 7.34499 35.1986 6.43719 35.1986 5.31569V4.99519C35.233 4.07379 34.98 3.16359 34.4719 2.38269C33.964 1.60179 33.2246 0.986288 32.3499 0.616088C31.3497 0.187388 30.2637 -0.0223138 29.1696 0.00198624H20.7622V0.0204875L22.5358 3.20669H24.4128V3.20619H28.7823C29.6674 3.20509 30.3495 3.43169 30.829 3.88619C31.071 4.12269 31.26 4.40509 31.3837 4.71539C31.5073 5.02559 31.5633 5.35729 31.548 5.68949V5.95649C31.5624 6.28989 31.5041 6.62239 31.3772 6.93269C31.2502 7.24319 31.0571 7.52419 30.8105 7.75809C30.3189 8.21259 29.6428 8.43979 28.7823 8.43979H24.6451H20.7622Z" fill="#000515" />
                <path fillRule="evenodd" clipRule="evenodd" d="M41.755 3.21808L39.995 0.00308443H47.396C48.454 -0.0202156 49.505 0.175185 50.479 0.576285C51.307 0.920985 52.017 1.48588 52.525 2.20508C53.03 2.95528 53.287 3.83528 53.263 4.72938V4.99638C53.263 5.85088 53.097 6.54928 52.765 7.09158C52.474 7.58658 52.072 8.01228 51.589 8.33768C51.191 8.60468 50.757 8.81638 50.298 8.96608V9.44668C50.769 9.58298 51.216 9.78508 51.626 10.0466C52.134 10.3701 52.555 10.805 52.855 11.3159C53.196 11.8677 53.367 12.5886 53.368 13.4786V13.7457C53.398 14.6817 53.141 15.6057 52.63 16.4016C52.126 17.1461 51.41 17.7349 50.569 18.0981C49.607 18.5071 48.565 18.7076 47.514 18.6856L39.995 18.6923V7.68438H43.635V7.69328H47.009C47.679 7.71958 48.338 7.52148 48.875 7.13248C49.116 6.94938 49.309 6.71358 49.437 6.44408C49.565 6.17488 49.625 5.87988 49.612 5.58378V5.31678C49.612 4.64038 49.373 4.11938 48.893 3.75388C48.412 3.38888 47.787 3.20728 47.013 3.20728H43.639V3.21808H41.755ZM47.064 15.4902H43.635L43.639 10.8975H47.068C47.879 10.8975 48.525 11.0844 49.004 11.4583C49.483 11.8321 49.723 12.3662 49.723 13.0604V13.3275C49.722 14.0217 49.476 14.5557 48.985 14.9296C48.495 15.3034 47.855 15.4902 47.064 15.4902Z" fill="#000515" />
                <path fillRule="evenodd" clipRule="evenodd" d="M60.456 3.21598L58.722 0.000976562H71.254V3.20518H62.38V3.21598H60.456ZM58.725 18.6924V7.68228H62.868V7.66448H68.672L70.332 10.8687H62.38V15.4881H69.591L71.2511 18.6924H58.725Z" fill="#000515" />
                <path fillRule="evenodd" clipRule="evenodd" d="M97.746 3.21418L97.747 3.21598H99.652V3.21418H100.341L103.994 18.6924H110.936V0.000976562H107.341V15.6555H106.693L102.999 0.000976562H96.082L97.746 3.21418ZM96.057 7.68228V18.6924H99.652V7.68228H96.057Z" fill="#000515" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.03333 3.53268C8.03693 3.53278 8.04022 3.53298 8.04372 3.53328H8.04543C9.02223 3.58968 9.94852 3.98499 10.6504 4.65089C11.41 5.37159 11.846 6.35158 11.8645 7.37958L11.8714 7.37949V11.6069C11.8714 12.8393 11.508 13.8235 10.781 14.5595C10.0541 15.2956 9.03482 15.6636 7.72282 15.6636C6.42742 15.6602 5.41212 15.2905 4.67702 14.5544C3.94182 13.8183 3.57423 12.8342 3.57423 11.6017V8.52398H0.0640259V11.5041C0.0640259 13.8139 0.755321 15.5895 2.13832 16.8311C3.52102 18.0726 5.38262 18.6935 7.72282 18.6935C10.063 18.6923 11.9246 18.0715 13.3074 16.8311C14.6903 15.5907 15.3817 13.8149 15.3817 11.5041V7.32038L15.4098 7.31998C15.406 7.10948 15.3928 6.89998 15.3705 6.69218C15.2769 4.62178 14.5892 3.01168 13.3074 1.86188C11.9246 0.621484 10.063 0.00128442 7.72282 0.00128442C7.09662 0.000884423 6.50472 0.0451833 5.94702 0.133883L8.03333 3.53268Z" fill="#000515" />
                <path fillRule="evenodd" clipRule="evenodd" d="M82.776 3.30168C82.88 3.29438 82.983 3.29068 83.088 3.29068C84.217 3.29068 85.3 3.71878 86.105 4.48278C86.458 4.81758 86.745 5.20508 86.958 5.62648C87.093 6.06568 87.161 6.55088 87.161 7.08228V11.6061C87.161 12.8384 86.797 13.8226 86.07 14.5586C85.344 15.2947 84.324 15.6627 83.012 15.6627C81.72 15.6593 80.705 15.2895 79.968 14.5535C79.232 13.8176 78.864 12.8333 78.864 11.601V8.47388H75.354V11.5034C75.354 13.813 76.045 15.5884 77.428 16.8301C78.811 18.0715 80.672 18.6923 83.012 18.6923C85.352 18.6911 87.214 18.0704 88.597 16.8301C89.979 15.5896 90.671 13.8142 90.671 11.5034V7.19008C90.671 4.87818 89.979 3.10218 88.597 1.86178C87.214 0.621484 85.352 0.00128379 83.012 0.00128379C82.295 0.000883793 81.623 0.0588844 80.996 0.175184L82.776 3.30168Z" fill="#000515" />
                <path d="M14.4126 30.9998V25.8542H17.2066C17.6009 25.8455 17.9912 25.9307 18.3435 26.1019C18.6624 26.2598 18.9283 26.5018 19.1102 26.7999C19.3018 27.1248 19.3978 27.4941 19.388 27.8679V27.7519C19.3969 28.1252 19.2974 28.4937 19.1004 28.8152C18.9151 29.1151 18.646 29.3586 18.324 29.5177C17.9807 29.6879 17.5989 29.7735 17.213 29.7672H15.7007V30.9998H14.4126ZM15.6941 28.6473H17.0813C17.3501 28.6589 17.6136 28.5721 17.8189 28.4042C17.8998 28.339 17.9663 28.2587 18.0146 28.1682C18.0629 28.0777 18.0918 27.9788 18.0999 27.8774V27.7519C18.0913 27.6506 18.0621 27.5522 18.014 27.462C17.9657 27.3718 17.8995 27.2918 17.8189 27.2265C17.6136 27.0587 17.3501 26.9719 17.0813 26.9834H15.6941V28.6473Z" fill="#000515" />
                <path d="M25.5146 30.9999V25.8541H28.471C28.8549 25.8459 29.2359 25.9192 29.5869 26.0691C29.8938 26.1991 30.1529 26.4152 30.3311 26.6892C30.5092 26.9634 30.598 27.2827 30.5859 27.6059V27.5228C30.6028 27.8643 30.5005 28.2011 30.2951 28.4796C30.1101 28.7166 29.862 28.9009 29.5772 29.0128V29.1822C29.6904 29.1822 29.8024 29.2051 29.9059 29.2495C30.0094 29.2938 30.1022 29.3585 30.1782 29.4394C30.3259 29.6167 30.402 29.8394 30.3927 30.0667V30.9951H29.111V30.2455C29.1168 30.1138 29.0743 29.9844 28.9908 29.88C28.9388 29.8291 28.8757 29.7898 28.806 29.7655C28.7362 29.741 28.6618 29.7319 28.5879 29.7389H26.8012V30.9936L25.5146 30.9999ZM26.7947 28.6192H28.328C28.4574 28.6272 28.587 28.6102 28.7095 28.5693C28.832 28.5284 28.9446 28.4642 29.0411 28.3808C29.127 28.2993 29.1943 28.2014 29.2388 28.0934C29.2833 27.9853 29.3039 27.8696 29.2995 27.7534V27.8538C29.3039 27.7381 29.2838 27.6226 29.2402 27.5147C29.1966 27.4068 29.1306 27.3088 29.046 27.2266C28.9486 27.1429 28.835 27.0786 28.7118 27.0378C28.5886 26.9969 28.4581 26.98 28.328 26.9882H26.7947V28.6192Z" fill="#000515" />
                <path d="M39.509 30.9999C38.655 30.9999 37.975 30.7736 37.471 30.3209C36.967 29.8691 36.714 29.223 36.714 28.3778V28.3463C36.714 27.5025 36.966 26.8543 37.471 26.4016C37.975 25.949 38.655 25.7225 39.509 25.7225C40.362 25.7225 41.043 25.95 41.546 26.4016C42.05 26.8533 42.303 27.4994 42.303 28.3463V28.3778C42.303 29.2199 42.051 29.8691 41.546 30.3209C41.041 30.7726 40.362 30.9999 39.509 30.9999ZM39.509 29.9021C39.714 29.9136 39.919 29.8838 40.111 29.8144C40.303 29.745 40.479 29.6375 40.625 29.4991C40.9 29.2049 41.043 28.8174 41.023 28.4216V28.315C41.043 27.9191 40.9 27.5318 40.625 27.2375C40.317 26.9777 39.921 26.8345 39.512 26.8345C39.102 26.8345 38.707 26.9777 38.398 27.2375C38.26 27.3822 38.154 27.5521 38.085 27.7371C38.015 27.9221 37.985 28.1185 37.995 28.315V28.4216C37.985 28.6181 38.016 28.8144 38.085 28.9994C38.154 29.1843 38.261 29.3542 38.398 29.4991C38.545 29.6359 38.719 29.7419 38.911 29.8101C39.102 29.8785 39.306 29.9077 39.509 29.8959V29.9021Z" fill="#000515" />
                <path d="M50.408 30.901V26.9803H48.429V25.8557H53.668V26.9803H51.689V30.901H50.408Z" fill="#000515" />
                <path d="M62.587 30.9012C61.733 30.9012 61.054 30.6747 60.55 30.2221C60.047 29.7694 59.795 29.1212 59.793 28.2774V28.3463C59.793 27.5025 60.046 26.8543 60.55 26.4016C61.055 25.949 61.734 25.7225 62.587 25.7225C63.442 25.7225 64.121 25.949 64.626 26.4016C65.13 26.8543 65.383 27.5025 65.383 28.3463V28.2774C65.383 29.1212 65.13 29.7694 64.626 30.2221C64.121 30.6747 63.442 30.9012 62.587 30.9012ZM62.587 29.7955C62.792 29.8077 62.997 29.7782 63.19 29.7087C63.382 29.6393 63.557 29.5314 63.703 29.3923C63.978 29.0983 64.121 28.7108 64.101 28.315C64.121 27.9191 63.978 27.5318 63.703 27.2375C63.395 26.9777 62.999 26.8345 62.59 26.8345C62.18 26.8345 61.785 26.9777 61.476 27.2375C61.339 27.3825 61.232 27.5524 61.163 27.7374C61.094 27.9222 61.063 28.1185 61.073 28.315C61.063 28.5113 61.094 28.7077 61.163 28.8926C61.232 29.0776 61.339 29.2474 61.476 29.3923C61.622 29.5304 61.797 29.6375 61.988 29.7069C62.179 29.7763 62.383 29.8064 62.587 29.7955Z" fill="#000515" />
                <path d="M74.244 30.9263C73.404 30.9263 72.737 30.7004 72.246 30.2472C71.756 29.7939 71.509 29.1494 71.509 28.3039V28.3463C71.509 27.5025 71.755 26.8543 72.246 26.4016C72.734 25.95 73.404 25.7225 74.244 25.7225C75.084 25.7225 75.724 25.9437 76.18 26.3828C76.57 26.7709 76.805 27.279 76.845 27.8178V27.8664H75.575L75.565 27.8162C75.523 27.5902 75.419 27.3791 75.264 27.2046C75.04 26.9547 74.698 26.8298 74.239 26.8298C74.042 26.8196 73.845 26.8503 73.661 26.9199C73.477 26.9892 73.31 27.096 73.172 27.2328C72.9 27.5362 72.761 27.9299 72.784 28.3307C72.762 28.7312 72.901 29.1246 73.172 29.4285C73.309 29.5662 73.476 29.6739 73.66 29.744C73.844 29.8141 74.042 29.8449 74.239 29.8346C74.7 29.8346 75.041 29.7087 75.264 29.4567C75.428 29.2719 75.535 29.0463 75.573 28.8058H76.845C76.813 29.3594 76.575 29.8833 76.176 30.2816C75.723 30.7125 75.079 30.9273 74.244 30.9263Z" fill="#000515" />
                <path d="M85.767 30.8839C84.912 30.8839 84.233 30.6576 83.728 30.2048C83.223 29.7521 82.971 29.1039 82.971 28.2601V28.3463C82.971 27.5025 83.223 26.8543 83.728 26.4016C84.233 25.949 84.912 25.7225 85.767 25.7225C86.62 25.7225 87.3 25.95 87.804 26.4016C88.307 26.8533 88.561 27.4994 88.561 28.3463V28.2601C88.561 29.1039 88.308 29.7521 87.804 30.2048C87.3 30.658 86.62 30.8839 85.767 30.8839ZM85.767 29.786C85.972 29.7976 86.177 29.7677 86.369 29.6984C86.561 29.6288 86.736 29.5215 86.883 29.383C87.157 29.0887 87.3 28.7012 87.279 28.3056V28.3165C87.3 27.9209 87.157 27.5334 86.883 27.239C86.574 26.9794 86.179 26.8362 85.769 26.8362C85.36 26.8362 84.964 26.9794 84.656 27.239C84.518 27.3838 84.411 27.5537 84.342 27.7387C84.273 27.9237 84.242 28.1202 84.253 28.3165V28.3056C84.242 28.5021 84.273 28.6984 84.342 28.8834C84.411 29.0685 84.518 29.2382 84.656 29.383C84.802 29.5196 84.977 29.6253 85.168 29.6933C85.36 29.7612 85.563 29.7902 85.767 29.7782V29.786Z" fill="#000515" />
                <path d="M94.687 30.8838V25.8541H95.968V29.7609H98.535V30.8854L94.687 30.8838Z" fill="#000515" />
            </svg> */}

            <img
                style={{
                    width: "40%",
                    height: "40%"
                }}
                src={Logos}
                alt="logo"
            />
        </>
    );
};

export default Logo;