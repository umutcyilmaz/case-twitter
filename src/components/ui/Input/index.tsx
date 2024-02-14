import { use, useRef, useState } from "react";
import Avatar from "@/components/ui/Avatar";
import Image from "next/image";
import PollInput from "../Input/PollInput/index";
import ImageInput from "../Input/ImageInput/index";
import Photo from "@/components/features/Feed/Post/Photo";
import { Button } from "../Button";
import { IPost } from "@/types";
import PreviewImage from "./PreviewImage";
import TextInput from "./TextInput";

interface Props {
  setTweet: React.Dispatch<React.SetStateAction<string>>;
  setEmptyInput: React.Dispatch<React.SetStateAction<boolean>>;
  setPollOptions: React.Dispatch<React.SetStateAction<string[]>>;
  setInputLength: React.Dispatch<React.SetStateAction<number>>;
  pollOptions: string[];
  previewImages: string[];
  setPreviewImages: React.Dispatch<React.SetStateAction<string[]>>;
  setImage: React.Dispatch<React.SetStateAction<string[] | null>>;
  setImageUploaded: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPoll: React.Dispatch<React.SetStateAction<boolean>>;
  setImageInputLength: React.Dispatch<React.SetStateAction<boolean>>;
  isPoll: boolean;
  tweet: string;
  handleSubmit: () => void;
  emptyInput: boolean;
  imageUploaded: boolean;
  inputLength: number;
  imageInputLength: boolean;
}

const TwitterInput: React.FC<Props> = ({
  setTweet,
  setEmptyInput,
  setPollOptions,
  setInputLength,
  pollOptions,
  previewImages,
  setPreviewImages,
  setImage,
  setImageUploaded,
  setIsPoll,
  setImageInputLength,
  isPoll,
  tweet,
  handleSubmit,
  emptyInput,
  imageUploaded,
  inputLength,
  imageInputLength,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [mention, setMention] = useState<boolean>(false);
  const [mentionText, setMentionText] = useState<string>("");
  const [mentionIndex, setMentionIndex] = useState<number>(0);
  const [mentionLastIndex, setMentionLastIndex] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);

    if (e.target.value.length > 0) {
      setEmptyInput(false);
    } else if (e.target.value.length === 0) {
      setEmptyInput(true);
    }


    if (tweet.slice(-2) === " @") {
      setMention(true);
    }
    if (mention) {
      const mentionText = tweet.slice(tweet.lastIndexOf("@"));
      setMentionText(mentionText);
      const mentionIndex = tweet.lastIndexOf("@");
      setMentionIndex(mentionIndex);
      const lastChar = tweet.charAt(tweet.length - 1);
      setMentionLastIndex(tweet.length);

      if (lastChar === " ") {
        setMention(false);
        console.log(mentionLastIndex);
        return;
      }
    }
  };

  const handlePollInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const options = [...pollOptions];
    options[index] = e.target.value;
    setPollOptions(options);

    setInputLength(options[index].length);

    if (options[0].length > 0 && options[1].length > 0 && tweet.length > 0) {
      setEmptyInput(false);
    }
  };

  const addOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const togglePoll = () => {
    setIsPoll(!isPoll);
    setImageInputLength(!imageInputLength);
  };

  const closePoll = () => {
    setIsPoll(false);
    setImageInputLength(false);
  };

  const handleImageChange = (event: any) => {
    const files = event.target.files;
    const updatedImages = [...previewImages];

    if (updatedImages.length + files.length > 3) {
      setImageInputLength(true);
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        updatedImages.push(reader.result as string);
        setPreviewImages([...updatedImages]);
      };

      reader.readAsDataURL(file);
    }
    setImage(updatedImages);

    if (event.target.files.length > 0) {
      setImageUploaded(true);
      setEmptyInput(false);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedImages = [...previewImages];
    updatedImages.splice(index, 1);
    setPreviewImages(updatedImages);
    if (updatedImages.length === 0) {
      setImageUploaded(false);
      setEmptyInput(true);
    }
  };

  

  return (
    <div className="flex gap-3 px-4 pb-3 bg-white border-b border-borderColor">
      <div className="flex gap-3 mt-3">
        <div className="mt-2 flex-1">
          <Avatar imageUrl="/avatarPhoto.jpeg" />
        </div>
      </div>

      <div className="flex flex-col pt-2 w-[510px]">
        <TextInput
          handleInputChange={handleInputChange}
          tweet={tweet}
          isPoll={isPoll}
          mention={mention}
          mentionIndex={mentionIndex}
          mentionText={mentionText}
          mentionLastIndex={mentionLastIndex}
        />


        {isPoll && !imageUploaded && (
          <PollInput
            pollOptions={pollOptions}
            addOption={addOption}
            handlePollInputChange={handlePollInputChange}
            inputLength={inputLength}
            closePoll={closePoll}
          />
        )}

        {imageUploaded && (
          <PreviewImage
            handleDeleteImage={handleDeleteImage}
            previewImages={previewImages}
          />
        )}

        <div className="flex items-center justify-between">
          <div className="flex justify-center items-center gap-2">
            <ImageInput
              handleImageChange={handleImageChange}
              imageInputLength={imageInputLength}
            />
            <label htmlFor="file-input" className="cursor-pointer">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`w-4 h-4 ${
                    imageInputLength ? "fill-gray-500" : "fill-blue-500"
                  }`}
                >
                  <g>
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                  </g>
                </svg>
              </div>
            </label>

            <div>
              <input
                type="checkbox"
                className="hidden"
                disabled={imageUploaded}
                checked={isPoll}
                onChange={togglePoll}
                id="poll-input"
              />
              <label htmlFor="poll-input">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className={`h-4 w-4 cursor-pointer   ${
                    imageUploaded ? "fill-gray-500" : "fill-blue-500"
                  } `}
                >
                  <g>
                    <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
                  </g>
                </svg>
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Button
              className="mt-2"
              onClick={handleSubmit}
              disabled={emptyInput}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterInput;
