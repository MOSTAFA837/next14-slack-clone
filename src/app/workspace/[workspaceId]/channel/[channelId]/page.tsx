"use client";

import Loading from "@/components/loading";
import NotFound from "@/components/not-found";
import useGetChannel from "@/features/channels/api/use-get-channel";
import { useChannelId } from "@/hooks/use-channel-id";
import Header from "./header";
import ChatInput from "./chat-input";
import { useGetMessages } from "@/features/messages/api/use-get-messages";
import MessageList from "@/components/message-list";

function ChannelIdPage() {
  const channelId = useChannelId();

  const { data: channel, isLoading: channelLoading } = useGetChannel({
    id: channelId,
  });

  const { results, status, loadMore } = useGetMessages({ channelId });

  console.log(results);

  if (channelLoading || status === "LoadingFirstPage") {
    return <Loading />;
  }

  if (!channel) {
    return <NotFound label="Channel not found" />;
  }

  return (
    <div className="flex flex-col h-full">
      <Header title={channel.name} />

      <MessageList
        channelName={channel.name}
        channelCreationTime={channel._creationTime}
        data={results}
        loadMore={loadMore}
        isLoadingMore={status === "LoadingMore"}
        canLoadMore={status === "CanLoadMore"}
        variant="channel"
      />

      <ChatInput placeholder={`Message # ${channel.name}`} />
    </div>
  );
}

export default ChannelIdPage;
