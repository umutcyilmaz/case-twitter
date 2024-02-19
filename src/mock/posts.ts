import { IPost } from "@/types";

export const posts: IPost[] = [
  {
    id: "1708632465282150796",
    type: "poll",
    content: `Deneme Sorulari.`,
    time: new Date(),
    poll: {
      voted: false,
      votes: 12,
      answers: [
        {
          id: 1,
          text: "Evet",
          votes: 8,
        },
        {
          id: 2,
          text: "Hayır",
          votes: 1,
        },
        {
          id: 3,
          text: "Yaaani",
          votes: 3,
        },
      ],
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
  },
  {
    id: "1708632465282150796",
    type: "photo",
    time: new Date(),

    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, labore error aspernatur non obcaecati quam voluptatum recusandae dolorum accusantium perspiciatis.`,
    photos: ["/avatarPhoto.jpeg"],
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
  },
  {
    id: "1708632465282150796",
    type: "photo",
    content: `Imagination Land!`,
    time: new Date(),

    photos: ["/avatarPhoto.jpeg", "/avatarPhoto.jpeg"],
    account: {
      avatar: "/avatarPhoto.jpeg",
      username: "elonmusk",
      fullName: "Elon Musk",
      verified: true,
    },
    stats: {
      comments: 6573535,
      repost: 343434,
      like: 366946,
      view: 23453453,
    },
  },
  {
    id: "1708704613141270652",
    content: `Less than a week since OpenAI started rolling out ChatGPT vision. And people have been busy executing god-like tasks. 35 truly mind-boggling examples: (29th is my favorite)`,
    time: new Date(),

    account: {
      avatar: "/avatarPhoto.jpeg",
      username: "sairahul1",
      fullName: "Sai Rahul",
      verified: true,
    },
    stats: {
      comments: 25,
      repost: 12,
      like: 99,
      view: 2341,
    },
  },
  {
    id: "1708810187170087410",
    type: "photo",
    time: new Date(),

    content: `İstanbul'da Cumhuriyet'in 100. yılına özel, 100 gün boyunca Yerebatan Sarnıcı, Şerefiye Sarnıcı, Miniatürk ve Panorama 1453 Tarih Müzesi ücretsiz ziyaret edilebilecek.`,
    photos: ["/avatarPhoto.jpeg", "/avatarPhoto.jpeg", "/avatarPhoto.jpeg"],
    account: {
      avatar: "/avatarPhoto.jpeg",
      username: "Darkwebhaber",
      fullName: "DarkWeb Haber",
    },
    stats: {
      comments: 234234,
      repost: 2324,
      like: 1134124,
      view: 111144,
    },
  },
  {
    id: "1708707876628476134",
    type: "photo",
    time: new Date(),
    content: `OpenAI's latest DALL-E 3 model is officially available free to try on Bing. The quality is insane, comparable to Midjourney. This prompt is going viral- mimicking a creepy iPhone capture that looks insanely realistic. Prompt in ALT tag + more examples in thread:`,
    photos: [
      "/avatarPhoto.jpeg",
      "/avatarPhoto.jpeg",
      "/avatarPhoto.jpeg",
      "/avatarPhoto.jpeg",
    ],
    account: {
      avatar: "/avatarPhoto.jpeg",
      username: "rowancheung",
      fullName: "Rowan Cheung",
      verified: true,
    },
    stats: {
      comments: 99999,
      repost: 999999,
      like: 999999,
      view: 99999999,
    },
  },
];
