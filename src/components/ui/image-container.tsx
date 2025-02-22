import * as React from "react";
import { cn } from "@/lib/utils";

export interface ImageContainerProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  containerClassName?: string;
}

const ImageContainer = React.forwardRef<HTMLImageElement, ImageContainerProps>(
  ({ className, aspectRatio, containerClassName, alt, ...props }, ref) => {
    return (
      <div className={cn("w-full", containerClassName)}>
        <img
          className={cn(
            "object-contain w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
            aspectRatio && `aspect-[${aspectRatio}]`,
            className,
          )}
          ref={ref}
          alt={alt || ""}
          {...props}
        />
      </div>
    );
  },
);
ImageContainer.displayName = "ImageContainer";

export { ImageContainer };
