import { IPost } from "@/types";

export const calculateTime = (post: IPost): string | null => {
  if (post && post.time) {
    const now = new Date();
    const millisecond = now.getTime() - post.time.getTime();

    const hour = Math.floor(millisecond / (1000 * 60 * 60));
    const minute = Math.floor(millisecond / (1000 * 60)) % 60;
    const second = Math.floor(millisecond / 1000) % 60;

    let elapsed = "";
    if (hour >= 24) {
      elapsed = post.time.toLocaleDateString();
    } else if (hour > 0) {
      elapsed = `${hour} hour`;
    } else if (minute > 0) {
      elapsed = `${minute} minute`;
    } else {
      elapsed = `${second} second`;
    }
    return elapsed;
  }
  return null;
};
