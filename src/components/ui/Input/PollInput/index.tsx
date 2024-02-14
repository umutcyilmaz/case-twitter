import React from "react";

interface PoolInputProps {
  pollOptions: string[];
  addOption: () => void;
  handlePollInputChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void;
  inputLength: number;
  closePoll: () => void;
}

const PoolInput: React.FC<PoolInputProps> = ({
  pollOptions,
  addOption,
  handlePollInputChange,
  inputLength,
  closePoll,
}) => {
  return (
    <div className="max-w-[508px] mx-auto w-full border border-borderColor pt-3 rounded-[16px]">
      <div className="mt-2 space-y-4">
        {pollOptions.map((option, index) => (
          <div key={index} className="flex justify-between items-center mx-2">
            <div className="w-full border peer-focus:border-primaryColor rounded-md relative inline-flex">
              <input
                type="text"
                className="w-full pl-3 h-10 mt-3 focus:outline-none peer"
                value={option}
                maxLength={25}
                onChange={(e) => handlePollInputChange(index, e)}
              />

              <div
                className={`h-4 pl-3 peer-focus:text-primaryColor ${
                  !option
                    ? "peer-focus:top-1 peer-focus:text-xs top-3.5"
                    : "top-1 text-xs"
                } absolute pointer-events-none transition-all `}
              >
                <div className="flex items-center justify-between">
                  <div>{`Choice ${index + 1}`}</div>
                </div>
              </div>

              <div className="h-4 pl-3 peer-focus:top-1 top-3.5 invisible peer-focus:visible right-3 absolute pointer-events-none peer-focus:text-xs">
                <div className="flex items-center justify-between">
                  <div>{`${inputLength} / 25`}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mr-2">
              {pollOptions.length < 4 && index === pollOptions.length - 1 && (
                <button
                  className="h-[20px] w-[20px] ml-3 text-primaryColor bg-transparent rounded-md hover:bg-green-100 focus:outline-none focus:ring focus:ring-green-300"
                  onClick={addOption}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" fill="blue">
                    <g>
                      <path d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"></path>
                    </g>
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          className="w-full mx-auto flex justify-center items-center px-2 py-3 text-red-500 bg-transparent rounded-b-[16px] border-t hover:bg-red-100 focus:outline-none focus:ring focus:ring-red-300"
          onClick={closePoll}
        >
          Remove poll
        </button>
      </div>
    </div>
  );
};

export default PoolInput;
