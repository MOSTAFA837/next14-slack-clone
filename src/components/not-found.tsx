import { TriangleAlert } from "lucide-react";

interface NotFoundProps {
  label: string;
}

function NotFound({ label }: NotFoundProps) {
  return (
    <div className="h-full flex-1 flex items-center justify-center flex-col gap-2">
      <TriangleAlert className="size-6 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export default NotFound;
