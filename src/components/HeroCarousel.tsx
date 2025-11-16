import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { comics } from "@/data/comics";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredComics = comics.filter(comic => comic.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredComics.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredComics.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredComics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredComics.length) % featuredComics.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden bg-gradient-to-b from-background to-card">
      {featuredComics.map((comic, index) => (
        <div
          key={comic.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <img
            src={comic.coverImage}
            alt={comic.title}
            className="absolute right-0 h-full w-1/2 object-cover opacity-40"
          />
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl animate-fade-in">
              <div className="inline-block px-4 py-1 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold mb-4">
                Featured
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
                {comic.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                {comic.description}
              </p>
              <div className="flex gap-4">
                <Link to={`/comic/${comic.id}`}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-glow-primary">
                    Read More
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" variant="outline">
                    Browse All
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-background/50 hover:bg-background/80"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-background/50 hover:bg-background/80"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {featuredComics.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-primary w-8" : "bg-muted"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
