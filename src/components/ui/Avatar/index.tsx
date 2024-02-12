import Image from "next/image";

interface AvatarProps {
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          width={40}
          height={40}
          className="rounded-full object-cover"
          alt="avatar"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-borderColor" />
      )}
    </div>
  );
};

export default Avatar;
