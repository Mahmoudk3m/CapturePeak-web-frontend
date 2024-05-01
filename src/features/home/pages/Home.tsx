import Post from "../components/Post";
import UploadButton from "../components/UploadButton";

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
      <UploadButton />
      <div className="container">
        <div className="flex flex-col items-center">
          {images.map((image, index) => (
            <Post
              key={index}
              image={image}
              username={`user${index}`}
              userImage={"https://source.unsplash.com/1600x900/?profile"}
              likes={(index + 2) * index + 1}
              liked={index % 2 == 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
