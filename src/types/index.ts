export interface IPost {
    id: string;
    type?: "poll" | "photo";
    content: string;
    time?: string;
    poll?: {
      voted: boolean;
      votes: number;
      answers: {
        id: number;
        text: string;
        votes: number;
      }[];
    };
    photos?: string[];
    account: {
      avatar: string;
      username: string;
      fullName: string;
      verified?: boolean;
    };
    stats: {
      comments: number;
      repost: number;
      like: number;
      view: number;
    };
  }