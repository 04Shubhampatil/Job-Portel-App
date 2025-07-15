import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel.jsx";
import { Button } from "./ui/button";
import { Outlet } from "react-router-dom";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX",
  "Data Science",
  "Machine Learning",
  "Cloud Computing",
];

function CategouryCarousel() {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-10">
        <CarouselContent>
          {categories.map((category) => (
            <CarouselItem className="md:basis-1/2  lg:basis-1/3">
              <Button variant="outline" className="rounded-full ">{category}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext/>
        <CarouselPrevious/>
      </Carousel>
    </div>
  );
}

export default CategouryCarousel;
