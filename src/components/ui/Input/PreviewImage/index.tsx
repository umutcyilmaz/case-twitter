import Image from "next/image";

interface PreviewImageProps {
  handleDeleteImage: (index: number) => void;
  previewImages: string[];
}

const PreviewImage: React.FC<PreviewImageProps> = ({
  handleDeleteImage,
  previewImages,
}) => {
  return (
    <div className="mx-auto w-[510px] flex  items-center overflow-x-auto">
      {previewImages.map((image, index) => (
        <div
          className="flex items-center justify-center relative w-[247px] h-[286px] gap-6 mr-2 mt-1 flex-shrink-0"
          key={index}
        >
          <Image
            src={image}
            alt={`Preview ${index + 1}`}
            fill
            className="object-cover rounded-2xl"
          />
          <button
            className="absolute top-0 right-0 flex gap-[10px] mt-[23px] mr-[20px]"
            onClick={() => handleDeleteImage(index)}
          >
            <div className="bg-white text-black w-[18px] h-[18px] flex justify-center items-center rounded-full">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PreviewImage;
