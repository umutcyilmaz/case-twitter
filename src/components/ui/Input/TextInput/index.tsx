import React, { ChangeEventHandler, useRef } from "react";

interface TextInputProps {
  isPoll: boolean;
  tweet: string;
  handleInputChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const TextInput: React.FC<TextInputProps> = ({
  isPoll,
  tweet,
  handleInputChange,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div>
      <textarea
        ref={textareaRef}
        className="w-full h-[28px] my-4 py-[2px] text-[20px] leading-[24px] placeholder-secondaryColor focus:border-transparent focus:outline-none rounded-md resize-none"
        placeholder={isPoll ? "Ask a question" : "What is happening?!"}
        value={tweet}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextInput;
