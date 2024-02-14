import React, { ChangeEventHandler, useRef } from "react";

interface TextInputProps {
  isPoll: boolean;
  tweet: string;
  handleInputChange: ChangeEventHandler<HTMLTextAreaElement>;
  mentionText: string;
  mentionIndex: number;
  mention: boolean;
  mentionLastIndex: number;
}

const TextInput: React.FC<TextInputProps> = ({
  isPoll,
  tweet,
  handleInputChange,
  mentionText,
  mentionIndex,
  mention,
  mentionLastIndex,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  if (textareaRef.current) {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

  }

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        className="w-full my-4 py-[2px] text-[20px] leading-[24px] placeholder-secondaryColor focus:border-transparent focus:outline-none rounded-md resize-none"
        placeholder={isPoll ? "Ask a question" : "What is happening?!"}
        value={tweet}
        onChange={handleInputChange}
      />

      {/* <div className=" top-[18px] left-0 absolute text-[20px] leading-[24px] placeholder-secondaryColor focus:border-transparent focus:outline-none rounded-md resize-none">
        {tweet.substring(0, mentionIndex)}
        <span className="text-blue-500">
          {tweet.substring(mentionIndex, mentionLastIndex)}
        </span>
      </div> */}
    </div>
  );
};

export default TextInput;
