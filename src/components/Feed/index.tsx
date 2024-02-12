import * as Tabs from "@/components/ui/Tabs";
import Post from "../features/Post";
import { posts } from "@/mock/posts";

const Feed: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto max-w-[600px] items-center w-full border-x border-borderColor">
      <Tabs.Root defaultValue="tab1">
        <Tabs.List
          className="flex items-center w-full sticky border-b border-borderColor top-0 z-10 backdrop-blur-md"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className="flex-auto data-[state=active]:font-bold  text-center  hover:bg-[#f7f9f9] transition-colors"
            value="tab1"
          >
            <div className="relative inline-flex items-center border-b-4 border-primaryColor h-[53px]">
              For You
            </div>
          </Tabs.Trigger>
          <Tabs.Trigger
            className="flex-auto  data-[state=active]:font-bold  h-[53px] text-center hover:bg-[#f7f9f9] transition-colors"
            value="tab2"
          >
            <div className="relative inline-flex items-center border-none active:border-b-4  active:border-primaryColor  h-[53px]">
              For You
            </div>
          </Tabs.Trigger>
          <button className="p-2 mx-2 bg-white hover:bg-hoverColor rounded-full">
            <svg viewBox="0 0 24 24" className="h-[20px]">
              <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
            </svg>
          </button>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div>
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
