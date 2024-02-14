import React from "react";

interface ImageInputProps {
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageInputLength: boolean;
}

const Imageinput: React.FC<ImageInputProps> = ({
  handleImageChange,
  imageInputLength,
}) => {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        disabled={imageInputLength}
        multiple
        className="hidden"
        id="file-input"
      />
    </div>
  );
};

export default Imageinput;
