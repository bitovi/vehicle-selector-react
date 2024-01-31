import { ComponentPropsWithoutRef } from "react";

const variants = {
  primary: {
    backgroundColor: "blue",
    color: "white",
  },
  secondary: {
    backgroundColor: "white",
    color: "blue",
  },
};

type ButtonProps = {
  variant?: keyof typeof variants;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"button">;

export function Button({ children, variant = "primary", ...restOfProps }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: variants[variant].backgroundColor,
      }}
      {...restOfProps}
    >
      {children}
    </button>
  );
}
