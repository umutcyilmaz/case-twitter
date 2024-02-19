import Image from "next/image";
import React from "react";

interface PhotoProps {
  photos: string[];
}

const Photo: React.FC<PhotoProps> = ({ photos }) => {
  switch (photos.length) {
    case 1:
      return (
        <div className="mt-3 relative max-w-[510px] w-full h-[516px]">
          <Image
            src={photos[0]}
            alt={photos[0]}
            fill
            className="border object-cover border-borderColor rounded-2xl"
          />
        </div>
      );

    case 2:
      return (
        <div className="mt-3  max-w-[510px] grid grid-cols-2 gap-0.5 max-h-[288px] border border-borderColor rounded-2xl overflow-hidden">
          <Image
            src={photos[0]}
            alt={photos[0]}
            width={250}
            height={288}
            className="border w-full h-full object-cover border-borderColor "
          />
          <Image
            src={photos[1]}
            alt={photos[1]}
            width={250}
            height={288}
            className="border  w-full h-full object-cover border-borderColor "
          />
        </div>
      );

    case 3:
      return (
        <div className="mt-3 grid grid-cols-2 gap-0.5  h-[288px] border border-borderColor rounded-2xl overflow-hidden">
          <Image
            src={photos[0]}
            alt={photos[0]}
            width={250}
            height={288}
            className="border  w-full h-full object-cover border-borderColor "
          />{" "}
          <div className="h-[288px] flex flex-col gap-0.5">
            <div className="flex-shrink-0 flex-1 relative h-[144px]">
              <Image
                src={photos[1]}
                alt={photos[1]}
                fill
                className="border  w-full h-full  object-cover border-borderColor "
              />
            </div>
            <div className="flex-shrink-0 flex-1 relative h-[144px]">
              <Image
                src={photos[2]}
                alt={photos[2]}
                fill
                className="border  w-full h-full object-cover border-borderColor "
              />
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="mt-3 relative grid grid-cols-2 gap-0.5 max-w-[510px] w-full h-[286px] border border-borderColor rounded-2xl overflow-hidden">
          <div className="flex-shrink-0 flex-1 relative w-[252px] h-[144px]">
            <Image
              src={photos[0]}
              alt={photos[0]}
              fill
              className="border  w-full h-full  object-cover border-borderColor "
            />
          </div>
          <div className="flex-shrink-0 flex-1 relative w-[252px] h-[144px]">
            <Image
              src={photos[1]}
              alt={photos[1]}
              fill
              className="border  w-full h-full  object-cover border-borderColor "
            />
          </div>
          <div className="flex-shrink-0 flex-1 relative w-[252px] h-[144px]">
            <Image
              src={photos[2]}
              alt={photos[2]}
              fill
              className="border  w-full h-full  object-cover border-borderColor "
            />
          </div>
          <div className="flex-shrink-0 flex-1 relative w-[252px] h-[144px]">
            <Image
              src={photos[3]}
              alt={photos[3]}
              fill
              className="border  w-full h-full  object-cover border-borderColor "
            />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Photo;
