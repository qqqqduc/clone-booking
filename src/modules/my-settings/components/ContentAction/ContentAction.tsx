import React, { ReactElement } from "react";
import "./ContentAction.scss";
import { useRouter } from "next/navigation";

interface IProps {
  key: number;
  icon: ReactElement;
  title: string;
  description: string;
  action: string;
  path: string;
}

function ContentAction({
  key,
  icon,
  title,
  description,
  action,
  path,
}: IProps) {
  const router = useRouter();

  return (
    <div
      key={key}
      className="content-action rounded border border-gray-200 p-4 flex gap-2 "
      onClick={() => router.push(`/mysettings/${path}`)}
    >
      <div className="rounded-full bg-gray-100 w-12 h-12 p-3">{icon}</div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-lg">{title}</div>
        <div>{description}</div>
        <div className="action-route text-blue-500">{action}</div>
      </div>
    </div>
  );
}

export default ContentAction;
