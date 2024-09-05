"use client";

import Toolbar from "./toolbar";

export default function WorkspaceIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Toolbar />
      {children}
    </div>
  );
}
