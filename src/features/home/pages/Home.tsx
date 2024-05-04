import Loader from "@/Shared/components/Loader";
import { useGetPosts } from "../api/getPosts";
import Post from "../components/Post";
import UploadButton from "../components/UploadButton";
import useUserStore from "@/stores/userStore";

export default function Home() {
  const { data, isLoading, isError } = useGetPosts();
  const { user } = useUserStore();
  const isLoggedIn = !!user?.token;

  return (
    <main className="w-full flex-auto">
      {isLoggedIn && <UploadButton />}
      <div className="container">
        <div className="flex flex-col items-center min-h-screen justify-center">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            "Error loading Images"
          ) : data?.length == 0 ? (
            "No Images Found"
          ) : (
            data?.map((item, index) => (
              <Post
                key={index}
                image={item.path}
                username={item.authorId.username}
                userImage={item.authorId.image}
                likes={item.likes}
                liked={item.liked}
                id={item._id}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
