import { CSSProperties, ReactNode } from "react";

type Props = {
  direction?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  style?: CSSProperties;
  children: ReactNode;
};

export const FlexContainer = ({
  direction,
  justifyContent,
  alignItems,
  style,
  children,
}: Props) => {
  const containerStyle = {
    display: "flex",
    flexDirection: direction || "row",
    justifyContent: justifyContent || "flex-start",
    alignItems: alignItems || "stretch",
    ...style,
  };

  return <div style={containerStyle}>{children}</div>;
};
