import { LoadingIndicator } from "./LoadingIndicator";
export const LoadingCell = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <LoadingIndicator />
      <p className="text-[17px] text-textLight ml-2">Loading</p>
    </div>
  );
};
