import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col gap-3 place-items-center place-content-center px-4 grow">
      <span className="text-2xl">{title}</span>
      <span className="text-muted-foreground">{description}</span>
      <img className="size-[512px] mt-4" src="/logo.png" alt="Color Swipe Saga Logo" width={512} height={512} />
      <div className="mt-4 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Levels</h2>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((level) => {
          const theme = Math.ceil(level / 25);
          return (
            <div key={level} className="flex justify-between py-1 border-b last:border-0">
              <span>Level {level}</span>
              <span>Theme {theme}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
