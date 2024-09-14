"use client";

import Loading from "@/components/loading";
import NotFound from "@/components/not-found";
import useGetChannel from "@/features/channels/api/use-get-channel";
import { useChannelId } from "@/hooks/use-channel-id";
import Header from "./header";
import ChatInput from "./chat-input";

function ChannelIdPage() {
  const channelId = useChannelId();

  const { data: channel, isLoading: channelLoading } = useGetChannel({
    id: channelId,
  });

  if (channelLoading) {
    return <Loading />;
  }

  if (!channel) {
    return <NotFound label="Channel not found" />;
  }

  return (
    <div className="flex flex-col h-full">
      <Header title={channel.name} />
      <div className="flex-1" />
      <ChatInput placeholder={`Message # ${channel.name}`} />
    </div>
  );
}

export default ChannelIdPage;
