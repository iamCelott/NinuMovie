const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between bg-[rgba(0,0,0,0.4)] mt-20 text-white select-none">
        <div className="flex flex-col items-center py-2 text-xs">
          <h1 className="font-semibold flex">
            Created by:{" "}
            <span className="font-normal text-[rgba(255,255,255,0.7)] pl-1 pr-1">
              Dharma Chandra Viriya
            </span>
            Using:
            <img
              src="/src/assets/svg/React-icon.svg"
              className="w-4 animate-spin ml-1"
              alt=""
            />
            <img
              src="/src/assets/svg/tailwind-svgrepo-com.svg"
              className="w-4 ml-1"
              alt=""
            />
          </h1>
        </div>
        <div className="flex gap-5 justify-center py-3 bg-[rgba(0,0,0,0.5)]">
          <a href="">
            {" "}
            <img
              src="/src/assets/svg/GitHub_Invertocat_Logo.svg"
              className="w-9 hover-drop-shadow"
              alt=""
            />
          </a>
          <a href="">
            {" "}
            <img
              src="/src/assets/svg/Instagram_logo_2022.svg"
              className="w-9 hover-drop-shadow"
              alt=""
            />
          </a>
          <a href="">
            {" "}
            <img
              src="/src/assets/svg/linkedin-svgrepo-com.svg"
              className="w-9 hover-drop-shadow"
              alt=""
            />
          </a>
          <a href="">
            {" "}
            <img
              src="/src/assets/svg/Telegram_2019_Logo.svg"
              className="w-9 hover-drop-shadow"
              alt=""
            />
          </a>
        </div>

        <div className="flex justify-center bg-[rgba(0,0,0,0.6)]">
          <h1 className="opacity-50 text-xs py-1">
            2024 Copyright, All Right Reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
