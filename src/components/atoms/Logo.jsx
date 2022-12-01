import LogoWhite from "@/assets/logos/logo-white.png";
import LogoGray from "@/assets/logos/PL-VACC_logo+tagline.png";

const Logo = ({ isWhite }) => {
  return (
    <>
      {isWhite ? (
        <img src="https://i.imgur.com/7PagZrt.png" />
      ) : (
        <img src={LogoGray} className="w-[80%] max-w-[300px]" />
      )}
    </>
  );
};

export default Logo;
