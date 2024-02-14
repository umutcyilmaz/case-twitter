import React from "react";

interface ShowMoreProps {
  DataLength?: number;
  fetchNewPosts: () => void;
}

const ShowMore: React.FC<ShowMoreProps> = ({ DataLength, fetchNewPosts }) => {
  return (
    <div>
      <button
        onClick={fetchNewPosts}
        className="flex justify-center items-center border-b border-borderColor h-[48px] w-full"
      >
        <div className="text-primaryColor text-[15px] leading-[20px]">
          Show {DataLength} posts
        </div>
      </button>
    </div>
  );
};

export default ShowMore;
