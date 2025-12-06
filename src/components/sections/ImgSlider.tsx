import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImgSlider() {
  const images = [
    "/bg1.jpg", 
    "/bg2.jpg",
    "/bg3.png",
    "/bg4.jpg",
    "/bg5.jpg",
  ]

  return (
    <div className="w-full bg-slate-100 flex justify-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-screen-2xl" 
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-[3/1] w-full overflow-hidden">
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full object-cover" 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Buttons - moved inside so they are visible on full width */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  )
}