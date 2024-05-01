import Heart from "@/assets/icons/Heart";

export default function Home() {
  const images = [
    "https://source.unsplash.com/1600x900/?nature",
    "https://source.unsplash.com/1600x900/?water",
    "https://source.unsplash.com/1600x900/?mountain",
    "https://source.unsplash.com/1600x900/?tree",
    "https://source.unsplash.com/1600x900/?forest",
    "https://source.unsplash.com/1600x900/?sky",
    "https://source.unsplash.com/1600x900/?cloud"
  ];
  return (
    <main className="w-full flex-auto">
      <div className="container">
        <div className="flex flex-col items-center">
          {images.map((image, index) => (
            <div key={index} className="w-full md:w-1/2">
              <div className="flex flex-row items-center pb-4">
                <img
                  src="https://source.unsplash.com/1600x900/?profile"
                  alt="profile"
                  className="w-5 h-5 md:w-10 md:h-10 rounded-full"
                />
                <p className="pl-2 font-bold text-sm">Username</p>
              </div>
              <img src={image} alt="random" className="w-full h-auto pb-2" />
              <div className="flex flex-row">
                <Heart filled={index % 2 === 0} />
                <p className="pl-2">100</p>
              </div>
              <div className="h-[1px] border-2 my-4" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
