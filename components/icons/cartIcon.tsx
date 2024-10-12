import {FC} from "react";

const CartIcon:FC<{isActive : boolean}> = ({isActive}) => {
    return(
        <>
            <svg className={isActive ? '' : 'group'} width="36" height="36" viewBox="0 0 36 36" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#46B1F0" className={isActive ? 'fill-white' : 'group-hover:fill-white'} />
                <path className={isActive  ? 'fill-[#46B1F0] stroke-[#46B1F0]' : 'group-hover:fill-[#46B1F0] group-hover:stroke-[#46B1F0]'}
                      d="M15.319 28.8749C16.3733 28.8749 17.2281 28.0202 17.2281 26.9658C17.2281 25.9115 16.3733 25.0568 15.319 25.0568C14.2646 25.0568 13.4099 25.9115 13.4099 26.9658C13.4099 28.0202 14.2646 28.8749 15.319 28.8749Z"
                      fill="#F7F7F7" />
                <path className={isActive  ? 'fill-[#46B1F0] stroke-[#46B1F0]' : 'group-hover:fill-[#46B1F0] group-hover:stroke-[#46B1F0]'}
                      d="M24.2281 28.8749C25.2824 28.8749 26.1372 28.0202 26.1372 26.9658C26.1372 25.9115 25.2824 25.0568 24.2281 25.0568C23.1737 25.0568 22.319 25.9115 22.319 26.9658C22.319 28.0202 23.1737 28.8749 24.2281 28.8749Z"
                      fill="#F7F7F7" />
                <path className={isActive  ? 'stroke-[#46B1F0]' : 'group-hover:stroke-[#46B1F0]'}
                      d="M7.0463 7.875H9.59174L14.0514 21.875H24.2281"
                      stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin={"round"} />
                <path className={isActive  ? 'stroke-[#46B1F0]' : 'group-hover:stroke-[#46B1F0]'}
                      d="M13.0586 18.6931L10.6099 11.0568H26.5278C26.6287 11.0566 26.7282 11.0805 26.818 11.1264C26.9079 11.1723 26.9855 11.2389 27.0446 11.3207C27.1036 11.4025 27.1424 11.4971 27.1577 11.5968C27.1729 11.6966 27.1643 11.7985 27.1324 11.8942L25.0107 18.2578C24.9686 18.3845 24.8876 18.4947 24.7793 18.5728C24.6711 18.6509 24.541 18.693 24.4075 18.6931H13.0586Z"
                      stroke="#F7F7F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </>
    )
}
export default CartIcon