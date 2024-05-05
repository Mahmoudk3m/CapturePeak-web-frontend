import Heart from "@/assets/icons/Heart";
import { useReactPost } from "../api/reactPost";
import Trash from "@/assets/icons/Trash";
import useUserStore from "@/stores/userStore";
import { useDeletePost } from "../api/deletePost";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Post({ image, username, userImage, likes, liked, id }: Home.PostProps) {
  const { mutate } = useReactPost();
  const { mutate: deletePost } = useDeletePost();

  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);

  const navigate = useNavigate();

  const isVideo = image.includes("video");

  const { user } = useUserStore();

  const handleDelete = () => {
    deletePost(id);
  };

  const handleLike = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);

    mutate(
      { postId: id, action: isLiked ? "remove" : "add" },
      {
        onError: () => {
          setIsLiked(!isLiked);
          setLikesCount(isLiked ? likesCount + 1 : likesCount - 1);
        }
      }
    );
  };

  return (
    <div className="w-full md:w-1/2">
      <div className="flex flex-row items-center pb-4">
        <img
          src={userImage || "https://static.productionready.io/images/smiley-cyrus.jpg"}
          alt={username}
          className="w-5 h-5 md:w-10 md:h-10 rounded-full"
        />
        <p className="pl-2 font-bold text-sm">{username}</p>
      </div>
      {isVideo ? <video src={image} controls /> : <img src={image} alt="random" className="w-full h-auto pb-2" />}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <button onClick={handleLike} className="mr-1">
            <Heart filled={isLiked} />
          </button>
          <p className="pl-2">{likesCount}</p>
        </div>
        {username === user?.username && (
          <button onClick={handleDelete} className="mr-1">
            <Trash />
          </button>
        )}
      </div>
      <div className="h-[1px] border-2 my-4" />
    </div>
  );
}
