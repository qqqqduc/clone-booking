import ICApple from "@/components/Icons/SignInIcons/ICApple";
import { Button } from "antd";
import React, { ReactNode } from "react";

function ButtonAccessMethod({ children }: { children?: React.ReactNode }) {
  return (
    <Button className="p-6 h-full">
      <span>{children}</span>
    </Button>
  );
}

export default ButtonAccessMethod;
