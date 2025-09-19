import type { FunctionComponent } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  const navigate = useNavigate();

  const handleProfileClick = (name: string) => {
    console.log(`Profile ${name} clicked`);
    navigate("/home");
  };

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
              className="h-10 ml-4 cursor-pointer"
            />
          </span>
        </div>
        <div
          id="loginDiv"
          className="flex flex-1 justify-center m-auto items-center w-full h-1/2"
        >
          <div className="flex flex-col items-center text-white">
            <h1 className="text-3xl mb-8">Who's watching?</h1>
            <div className="flex gap-8">
              {CardData.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer bg-yellow-300 hover:scale-105 transition-all p-4 rounded-md"
                  onClick={() => handleProfileClick(card.name)}
                >
                  <img
                    src={card.imgUrl}
                    alt={card.name}
                    className="w-28 h-28 rounded-md"
                  />
                  <span className="mt-2">{card.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition-all p-4">
                <div className="bg-gray-600 items-center justify-center w-20 h-20 flex flex-col my-auto rounded-full">
                  <Plus className="text-black text-2xl" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="w-45 h-10 border border-gray-400 cursor-pointer text-gray-400 hover:border-gray-300 hover:text-gray-300 transition-all">
                Create Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
