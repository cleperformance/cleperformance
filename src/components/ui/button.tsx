"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#F0B800]/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#C82020] text-white hover:bg-[#1C0A08]",
        accent:
          "bg-[#F0B800] text-[#1C0A08] hover:bg-[#F0B800]/90 font-semibold",
        outline:
          "border border-[#F0D898] bg-white text-[#1C0A08] hover:bg-[#FFF3E0] hover:text-[#C82020]",
        "outline-light":
          "border border-white/30 bg-transparent text-white hover:bg-white/10",
        secondary: "bg-[#FFF3E0] text-[#1C0A08] hover:bg-[#F0D898]",
        ghost: "text-[#1C0A08] hover:bg-[#FFF3E0]",
        destructive: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
        link: "text-[#C82020] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
