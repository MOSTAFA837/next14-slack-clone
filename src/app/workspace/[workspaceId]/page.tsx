interface Props {
  params: { workspaceId: string };
}

export default function WorkspaceIdPage({ params }: Props) {
  return <div>ID: {params.workspaceId}</div>;
}
