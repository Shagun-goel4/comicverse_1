import { Link } from "react-router-dom";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ComicCard from "@/components/ComicCard";
import { Button } from "@/components/ui/button";
import { comics } from "@/data/comics";
import { Sparkles, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const newReleases = comics
    .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
    .slice(0, 4);

  const marvelComics = comics.filter((c) => c.publisher === "Marvel").slice(0, 4);
  const dcComics = comics.filter((c) => c.publisher === "DC").slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroCarousel />

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-6 w-6 text-accent" />
              <h2 className="text-3xl font-bold text-foreground">New Releases</h2>
            </div>
            <p className="text-muted-foreground">Fresh from the press</p>
          </div>
          <Link to="/browse">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {newReleases.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      <section className="bg-card/50 border-y border-border py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Marvel Comics</h2>
              </div>
              <p className="text-muted-foreground">Earth's mightiest heroes</p>
            </div>
            <Link to="/browse">
              <Button variant="outline">View All Marvel</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {marvelComics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-6 w-6 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">DC Comics</h2>
            </div>
            <p className="text-muted-foreground">Legendary heroes and villains</p>
          </div>
          <Link to="/browse">
            <Button variant="outline">View All DC</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {dcComics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 ComicVerse Hub. A demo project showcasing modern web design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
