import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, User, Calendar, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { comics } from "@/data/comics";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";
import ComicCard from "@/components/ComicCard";

const ComicDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const comic = comics.find((c) => c.id === id);
  const relatedComics = comics
    .filter((c) => c.publisher === comic?.publisher && c.id !== id)
    .slice(0, 4);

  if (!comic) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Comic Not Found</h1>
          <Link to="/browse">
            <Button>Browse Comics</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(comic);
    toast.success("Added to cart!", {
      description: `${comic.title} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="aspect-[2/3] overflow-hidden rounded-lg border border-border shadow-glow-primary">
              <img
                src={comic.coverImage}
                alt={comic.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-block w-fit px-4 py-1 bg-primary/20 border border-primary rounded-full text-primary text-sm font-semibold mb-4">
              {comic.publisher}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {comic.title}
            </h1>

            <div className="flex items-center gap-6 mb-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Issue #{comic.issueNumber}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(comic.releaseDate).toLocaleDateString()}</span>
              </div>
            </div>

            <Card className="bg-card border-border p-6 mb-6">
              <h3 className="font-semibold mb-2 text-foreground">Creators</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Writer: {comic.creators.writer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Artist: {comic.creators.artist}</span>
                </div>
              </div>
            </Card>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {comic.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="text-3xl font-bold text-primary">${comic.price}</div>
              <div className="flex-1">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 shadow-glow-primary"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              <div className="px-3 py-1 bg-muted rounded-full text-sm">
                {comic.genre}
              </div>
              <div className="px-3 py-1 bg-muted rounded-full text-sm">
                {comic.character}
              </div>
            </div>
          </div>
        </div>

        {relatedComics.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              More from {comic.publisher}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedComics.map((relatedComic) => (
                <ComicCard key={relatedComic.id} comic={relatedComic} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComicDetail;
