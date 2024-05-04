import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex flex-row items-center justify-center">
      <FadeLoader color="#3b82f6" speedMultiplier={2} />
    </div>
  );
}
