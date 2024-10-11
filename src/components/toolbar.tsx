import {
  MessageSquare,
  MessageSquareIcon,
  Pencil,
  SmileIcon,
  Trash,
} from "lucide-react";
import { Button } from "./ui/button";
import Hint from "./hint";
import EmojiPopover from "./emoji-popover";

interface ToolbarProps {
  isAuthor: boolean;
  isPending: boolean;
  handleEdit: () => void;
  handleThread: () => void;
  handleDelete: () => void;
  handleReaction: (value: string) => void;
  hideThreadButton?: boolean;
}

function Toolbar({
  isAuthor,
  isPending,
  handleEdit,
  handleThread,
  handleDelete,
  hideThreadButton,
  handleReaction,
}: ToolbarProps) {
  return (
    <div className="absolute top-0 right-5">
      <div className="group-hover:opacity-100 opacity-0 translate border bg-white rounded-md shadow-sm">
        <EmojiPopover
          hint="Add reaction"
          onEmojiSelect={(emoji) => handleReaction(emoji.native)}
        >
          <Button variant="ghost" size="iconSm" disabled={isPending}>
            <SmileIcon className="size-4" />
          </Button>
        </EmojiPopover>

        {!hideThreadButton && (
          <Hint label="Reply in thread">
            <Button variant="ghost" size="iconSm" disabled={isPending}>
              <MessageSquareIcon className="size-4" />
            </Button>
          </Hint>
        )}

        {isAuthor && (
          <>
            <Hint label="Edit message">
              <Button variant="ghost" size="iconSm" disabled={isPending}>
                <Pencil className="size-4" />
              </Button>
            </Hint>

            <Hint label="Delete message">
              <Button variant="ghost" size="iconSm" disabled={isPending}>
                <Trash className="size-4" />
              </Button>
            </Hint>
          </>
        )}
      </div>
    </div>
  );
}

export default Toolbar;
