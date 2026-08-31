import Image from "next/image";
import { Images } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/site-data";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-brand-50/40 py-20 lg:py-28">
      <div className="container-custom">
        <div className="text-center">
          <p className="eyebrow">Gallery</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {GALLERY_IMAGES.map((image, idx) => (
            <div
              key={image.src}
              className={`group relative aspect-square overflow-hidden rounded-2xl shadow-soft ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-darker/0 transition-colors duration-300 group-hover:bg-brand-darker/10" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#gallery" className="btn-outline">
            <Images className="h-4 w-4" />
            View More Photos
          </a>
        </div>
      </div>
    </section>
  );
}
