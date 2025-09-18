import type { FunctionComponent } from "react";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const CardData = [
    {
      name: "Name1",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Name2",
      imgUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Name3",
      imgUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <div id="mainDiv" className="flex flex-col bg-black h-screen">
        <div id="navBar" className="ml-4 mt-5">
          <span className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="logo"
              className="h-12 ml-4 cursor-pointer"
            />
          </span>
        </div>
        <div
          id="loginDiv"
          className="flex justify-center m-auto items-center w-full h-1/2"
        >
          <div className="flex flex-col h-1/3 w-1/3">
            <h2 className="text-white text-3xl text-center">Choose Account</h2>
            <div className="flex items-center space-x-4 h-2/3 ">
              {CardData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col w-8 h-8 bg-yellow-300"
                >
                  <img
                    src={card.imgUrl}
                    alt={card.name}
                    className="w-full h-full"
                  />
                </div>
              ))}
              <div className="h-3/3">
                Prfile
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
