import Feed from "@/components/Feed";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Feed />
    </main>
  );
}
