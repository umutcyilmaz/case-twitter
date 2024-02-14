"use client";
import * as Tabs from "@/components/ui/Tabs";
import Post from "./Post";
import { posts as postData } from "../../../mock/posts";
import TwitterInput from "../../ui/Input";
import { useEffect, useState } from "react";
import { IPost } from "@/types";
import ShowMore from "../ShowMore";
const { v4: uuidv4 } = require("uuid");

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>(postData);
  const [upcomingPosts, setUpcomingPosts] = useState<IPost[]>([]);

  const [tweet, setTweet] = useState<string>("");
  const [image, setImage] = useState<string[] | null>(null);
  const [pollOptions, setPollOptions] = useState<string[]>(["", ""]);
  const [isPoll, setIsPoll] = useState<boolean>(false);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);
  const [inputLength, setInputLength] = useState<number>(0);
  const [imageInputLength, setImageInputLength] = useState<boolean>(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [emptyInput, setEmptyInput] = useState<boolean>(true);

  const handleSubmit = () => {
    let newPost: IPost | null = null;
    newPost = {
      id: uuidv4(),
      content: tweet,
      time: new Date(),
      account: {
        avatar: "/avatarPhoto.jpeg",
        username: "elonmusk",
        fullName: "Elon Musk",
        verified: true,
      },
      stats: {
        comments: 25,
        repost: 12,
        like: 99,
        view: 2341,
      },
    };

    if (image) {
      newPost = {
        id: uuidv4(),
        type: "photo",
        content: tweet,
        time: new Date(),
        photos: image ? [...image] : [],
        account: {
          avatar: "/avatarPhoto.jpeg",
          username: "stevej",
          fullName: "Steve Jobs",
          verified: true,
        },
        stats: {
          comments: 25,
          repost: 12,
          like: 99,
          view: 2341,
        },
      };
    }

    if (isPoll) {
      let answers = pollOptions
        .filter((option) => option.trim() !== "")
        .map((option, index) => ({
          id: index + 1,
          text: option,
          votes: 0,
        }));

      newPost = {
        id: uuidv4(),
        type: "poll",
        content: tweet,
        time: new Date(),
        poll: {
          voted: false,
          votes: 0,
          answers: answers,
        },
        account: {
          avatar: "/avatarPhoto.jpeg",
          username: "umutcyilmaz",
          fullName: "Umut Can YILMAZ",
        },
        stats: {
          comments: 43535,
          repost: 3434,
          like: 96946,
          view: 903453,
        },
      };
    }

    if (newPost) {
      addNewPost(newPost);

      setTweet("");
      setImage(null);
      setPreviewImages([]);
      setPollOptions(["", ""]);
      setIsPoll(false);
      setImageUploaded(false);
      setImageInputLength(false);
      setEmptyInput(true);
    }
  };

  const addNewPost = (newPost: IPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const fetchNewPosts = () => {
    setPosts((prevPosts) => [...upcomingPosts, ...prevPosts]);
    setUpcomingPosts([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUpcomingPosts((oldPosts: IPost[]) => {
        let olds = [...oldPosts];
        let news = shuffle([...postData]);
        return [...olds, ...news];
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col mx-auto max-w-[600px] items-center w-full border-x border-borderColor">
      <Tabs.Root defaultValue="tab1">
        <Tabs.List
          className="flex items-center w-full sticky border-b border-borderColor top-0 z-10 backdrop-blur-md"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className="flex-auto data-[state=active]:font-bold data-[state=active]:text-primaryTextColor text-secondaryColor text-center hover:bg-[#f7f9f9] transition-colors"
            value="tab1"
          >
            <div className="relative inline-flex items-center border-b-4 border-primaryColor h-[53px]">
              For you
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="flex-auto  data-[state=active]:font-bold text-center hover:bg-[#f7f9f9] transition-colors"
            value="tab2"
          >
            <div className="relative inline-flex text-secondaryColor items-center border-none active:border-b-4 leading-[20px] font-medium text-[15px] active:border-primaryColor  h-[53px]">
              Following
            </div>
          </Tabs.Trigger>
          <button className="p-2 mx-2  hover:bg-hoverColor rounded-full">
            <svg viewBox="0 0 24 24" className="h-[20px]">
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
            </svg>
          </button>
        </Tabs.List>

        <TwitterInput
          setTweet={setTweet}
          setEmptyInput={setEmptyInput}
          setPollOptions={setPollOptions}
          setInputLength={setInputLength}
          pollOptions={pollOptions}
          previewImages={previewImages}
          setPreviewImages={setPreviewImages}
          setImage={setImage}
          setImageUploaded={setImageUploaded}
          setIsPoll={setIsPoll}
          setImageInputLength={setImageInputLength}
          tweet={tweet}
          handleSubmit={handleSubmit}
          emptyInput={emptyInput}
          isPoll={isPoll}
          imageUploaded={imageUploaded}
          inputLength={inputLength}
          imageInputLength={imageInputLength}
        />
        <Tabs.Content value="tab1">
          <div>
            {upcomingPosts.length > 0 && (
              <ShowMore
                fetchNewPosts={fetchNewPosts}
                DataLength={upcomingPosts.length}
              />
            )}

            {posts.map((post, key) => (
              <Post post={post} key={post.id + key} />
            ))}
          </div>{" "}
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none "
          value="tab2"
        >
          <div>Followings</div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Feed;
