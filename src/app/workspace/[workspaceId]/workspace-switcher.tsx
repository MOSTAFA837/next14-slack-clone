import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WorkspaceSwitcher() {
  const router = useRouter();

  const workspaceId = useWorkspaceId();
  const [_open, setOpen] = useCreateWorkspaceModal();

  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspace({
    id: workspaceId,
  });
  const { data: workspaces, isLoading: workspacesLoading } = useGetWorkspaces();

  const filteredWorkspaces = workspaces?.filter(
    (workspace) => workspace?._id !== workspaceId
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="size-9 relative overflow-hidden bg-[#ababad] hover:bg-[#ababad]/80 text-slate-800 font-semibold text-xl">
          {workspaceLoading ? (
            <Loader className="size-5 animate-spin shrink-0" />
          ) : (
            workspace?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent side="bottom" align="start" className="w-64">
        <DropdownMenuItem
          onClick={() => router.push(`/workspace/${workspaceId}`)}
          className="cursor-pointer flex-col justify-start items-start capitalize"
        >
          {workspace?.name}

          <span className="text-xs text-muted-foreground">
            Active workspace
          </span>
        </DropdownMenuItem>

        {filteredWorkspaces?.map((workspace) => (
          <DropdownMenuItem
            key={workspace._id}
            className="cursor-pointer capitalize overflow-hidden"
            onClick={() => router.push(`/workspace/${workspace._id}`)}
          >
            <div className="size-9 shrink-0 relative mr-2 bg-[#616061] overflow-hidden font-semibold text-lg rounded-md flex items-center justify-center">
              {workspace?.name.charAt(0).toUpperCase()}
            </div>

            <p className="truncate">{workspace.name}</p>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="size-9 relative mr-2 bg-[#f2f2f2] text-sky-800 overflow-hidden font-semibold text-lg rounded-md flex items-center justify-center">
            <Plus />
          </div>
          Create a new workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
