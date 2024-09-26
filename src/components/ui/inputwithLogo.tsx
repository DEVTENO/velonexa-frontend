import * as React from "react";

import { cn } from "@/lib/utils";

// Tambahkan IconProps ke dalam InputProps
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode; // Tambahkan icon di sini
  icon2?: React.ReactNode; // Tambahkan icon di sini
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, icon2, ...props }, ref) => {
    return (
      <div
        className={cn(
          `flex gap-[13px] items-center border border-[#dbdbdb] text-[21px]  py-[10px] px-[31px] rounded-md w-full h-[68px]  span-2`,
          className
        )}
      >
        {icon && <span>{icon}</span>} {/* Tampilkan icon jika ada */}
        <input
          type={type}
          className={cn(
            "flex w-full px-3 py-2 ring-offset-background outline-none file:border-0 bg-transparent file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          )}
          ref={ref}
          {...props}
        />
        {icon2 && <span>{icon2}</span>} {/* Tampilkan icon jika ada */}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
