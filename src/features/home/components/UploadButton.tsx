import UploadIcon from "@/assets/icons/Upload";
import { convertFileToBase64 } from "@/utils/convertToBase64";
import { useUploadPost } from "../api/uploadPost";

export default function UploadButton() {
  const { mutate, isLoading } = useUploadPost();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target.files?.[0];
    if (file) {
      const base64 = await convertFileToBase64(file);

      mutate({ title: file.name, file: base64 });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <input type="file" id="fileUpload" className="hidden" onChange={handleFileUpload} disabled={isLoading} />
      <label
        htmlFor="fileUpload"
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-primary-500 rounded-xl group cursor-pointer"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-primary-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative flex flex-row gap-2 text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          {isLoading ? (
            "Uploading..."
          ) : (
            <>
              Upload
              <UploadIcon />
            </>
          )}
        </span>
      </label>
    </div>
  );
}
