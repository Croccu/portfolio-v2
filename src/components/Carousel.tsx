"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

interface CarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function Carousel({ images, alt, className }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div
        className={cn(
          "flex aspect-video items-center justify-center rounded-lg border border-border/50 bg-muted",
          className
        )}
      >
        <p className="text-sm text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className="flex w-full items-center gap-3">
        {hasMultiple && (
          <button
            onClick={prev}
            className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div className="relative w-full overflow-hidden rounded-lg">
          <div className="relative aspect-[16/8.5]">
            <Image
              src={images[current]}
              alt={`${alt} — image ${current + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority={current === 0}
            />
          </div>
        </div>

        {hasMultiple && (
          <button
            onClick={next}
            className="shrink-0 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {hasMultiple && (
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === current
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/40 hover:bg-foreground/60"
              )}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
