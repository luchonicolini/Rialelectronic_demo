"use client";

import Image from "next/image";
import { useState } from "react";

export const FALLBACK_PRODUCT_IMAGE = "/products/imagen-pendiente.png";

interface ProductImageProps {
  src?: string | null;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  onLoadingComplete?: () => void;
}

export function ProductImage({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 400px",
  className = "object-contain",
  priority = false,
}: ProductImageProps) {
  // Guardamos el src específico que falló para evitar useEffect
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  const isFailed = Boolean(src && failedSrc === src);
  const isFallback = !src || isFailed || src === FALLBACK_PRODUCT_IMAGE;
  const imageSource = isFallback ? FALLBACK_PRODUCT_IMAGE : src;
  const imageAlt = isFallback ? `Imagen pendiente: ${alt}` : alt;

  if (fill) {
    return (
      <Image
        src={imageSource}
        alt={imageAlt}
        fill
        sizes={sizes}
        quality={95}
        loading={priority ? "eager" : "lazy"}
        className={className}
        onError={() => {
          if (imageSource !== FALLBACK_PRODUCT_IMAGE && src) {
            setFailedSrc(src);
          }
        }}
      />
    );
  }

  return (
    <Image
      src={imageSource}
      alt={imageAlt}
      width={width || 300}
      height={height || 300}
      sizes={sizes}
      quality={95}
      loading={priority ? "eager" : "lazy"}
      className={className}
      onError={() => {
        if (imageSource !== FALLBACK_PRODUCT_IMAGE && src) {
          setFailedSrc(src);
        }
      }}
    />
  );
}
