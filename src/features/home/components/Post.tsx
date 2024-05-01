import Heart from "@/assets/icons/Heart";

export default function Post({ image, username, userImage, likes, liked }: Home.PostProps) {
  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-row items-center pb-4">
        <img src={userImage} alt={username} className="w-5 h-5 md:w-10 md:h-10 rounded-full" />
        <p className="pl-2 font-bold text-sm">{username}</p>
      </div>
      <img src={image} alt="random" className="w-full h-auto pb-2" />
      <div className="flex flex-row">
        <Heart filled={liked} />
        <p className="pl-2">{likes}</p>
      </div>
      <div className="h-[1px] border-2 my-4" />
    </div>
  );
}
