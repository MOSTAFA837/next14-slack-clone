import { Loader } from "lucide-react";

function Loading() {
  return (
    <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}

export default Loading;
