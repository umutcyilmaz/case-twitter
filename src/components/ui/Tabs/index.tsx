"use client";

import React, { FC } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  type TabsTriggerProps,
  type TabsListProps,
  type TabsProps,
  type TabsContentProps,
} from "@radix-ui/react-tabs";

export const Root: FC<TabsProps> = (props) => {
  return (
    <Tabs.Root
      className="flex flex-col w-full "
      {...props}
    >
      {props.children}
    </Tabs.Root>
  );
};
export const List: FC<TabsListProps> = (props) => {
  return (
    <Tabs.List className="shrink-0 flex border-b" {...props}>
      {props.children}
    </Tabs.List>
  );
};
export const Trigger: FC<TabsTriggerProps> = (props) => {
  return (
    <Tabs.Trigger
      className="inline-flex relative bg-white px-5  flex-1 items-center justify-center text-[15px] leading-[20px] text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:font-bold data-[state=active]:border-b-primaryColor  data-[state=active]:focus:relative  outline-none cursor-default"
      {...props}
    >
      {props.children}
    </Tabs.Trigger>
  );
};
export const Content: FC<TabsContentProps> = (props) => {
  return (
    <Tabs.Content
      className="bg-white  flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:focus:relative  outline-none cursor-default"
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};
