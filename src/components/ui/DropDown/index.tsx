import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../Button";

const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center outline-none  focus:shadow-black"
          aria-label="Customise options"
        >
          ···
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[325px] bg-white rounded-xl  shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group h-[44px] cursor-pointer hover:bg-slate-100 text-[15px] py-[12px] px-[16px] leading-[20px] font-bold text-black rounded-[3px] flex items-center relative  select-none outline-none roundedn-t-xl">
            <div className="pr-[12px]">⌘</div>
            <div className="">Not interested in this post</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group h-[44px] cursor-pointer hover:bg-slate-100 text-[15px] py-[12px] px-[16px] leading-[20px] font-bold text-black rounded-[3px] flex items-center relative  select-none outline-none ">
            <div className=" pr-[12px] ">⌘</div>
            New Private Window{" "}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group h-[44px] cursor-pointer hover:bg-slate-100 text-[15px] py-[12px] px-[16px] leading-[20px] font-bold text-black rounded-[3px] flex items-center relative  select-none outline-none ">
            <div className=" pr-[12px] ">⌘</div>
            New Private Window{" "}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group h-[44px] cursor-pointer hover:bg-slate-100 text-[15px] py-[12px] px-[16px] leading-[20px] font-bold text-black rounded-[3px] flex items-center relative  select-none outline-none ">
            <div className=" pr-[12px] ">⌘</div>
            New Private Window{" "}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group h-[44px] cursor-pointer hover:bg-slate-100 text-[15px] py-[12px] px-[16px] leading-[20px] font-bold text-black rounded-[3px] flex items-center relative  select-none outline-none ">
            <div className=" pr-[12px] ">⌘</div>
            New Private Window{" "}
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group h-[44px] cursor-pointer hover:bg-slate-100 text-[15px] py-[12px] px-[16px] leading-[20px] font-bold text-black rounded-[3px] flex items-center relative  select-none outline-none rounded-b-xl">
            <div className=" pr-[12px] ">⌘</div>
            Add/Remove @umutcyilmaz from Lists
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;
