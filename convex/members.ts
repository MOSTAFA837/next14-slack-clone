import { v } from "convex/values";
import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const current = query({
  args: { workspaceId: v.id("workspaces") },
  handler: async (ctx, args) => {
    console.log("members.current handler called", { args, ctx });
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      console.log("members.current: no user id");
      return null;
    }

    const member = await ctx.db
      .query("members")
      .withIndex("by_workspace_id_user_id", (q) =>
        q.eq("workspaceId", args.workspaceId).eq("userId", userId)
      )
      .unique();

    if (!member) {
      console.log("members.current: no member found", { args, userId });
      return null;
    }

    console.log("members.current: member found", { member, args, userId });
    return member;
  },
});
