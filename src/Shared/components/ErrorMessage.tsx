export default function ErrorMessage({ message }: { message: string }) {
  return (
    <ul className="text-xs md:text-sm text-red-500 ">
      <li>{message}</li>
    </ul>
  );
}
