import { ConfigProvider, Tooltip } from "antd";
import React, { ReactNode } from "react";

function TooltipHeader({
  children,
  text,
}: {
  children: ReactNode;
  text?: string;
}) {
  return (
    <ConfigProvider>
      <Tooltip
        placement="bottom"
        title={text}
        mouseEnterDelay={0.2}
        arrow={false}
      >
        {children}
      </Tooltip>
    </ConfigProvider>
  );
}

export default TooltipHeader;
