import { Loader2Icon } from "lucide-react";

export const PageLoader = () => {
  return (
    <div className="flex top-0 left-0 absolute justify-center w-full bg-gray-200  opacity-90 items-center h-full">
      <div className=" animate-spin">
        <i data-feather="loader" className="feather-loader w-16 h-16">
          <Loader2Icon />
        </i>
      </div>
    </div>
  );
};
