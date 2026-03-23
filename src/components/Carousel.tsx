"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function Carousel({ images, alt, className }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;
  const touchStart = useRef<number | null>(null);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart.current === null) return;
      const diff = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
      touchStart.current = null;
    },
    [next, prev]
  );

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
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="flex min-h-0 flex-1 items-center justify-center w-full">
        <div className="relative w-full aspect-video">
          <div
            className="absolute inset-0 overflow-hidden rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`${alt} — image ${current + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                  quality={100}
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {hasMultiple && (
            <>
              <button
                onClick={prev}
              className="absolute -left-15 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
              className="absolute -right-15 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
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
