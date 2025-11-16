import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Comic } from "@/data/comics";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

interface ComicCardProps {
  comic: Comic;
}

const ComicCard = ({ comic }: ComicCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(comic);
    toast.success("Added to cart!", {
      description: `${comic.title} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden border-border bg-card transition-all hover:shadow-glow-primary hover:-translate-y-2">
      <Link to={`/comic/${comic.id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={comic.coverImage}
            alt={comic.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {comic.featured && (
            <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {comic.title}
              </h3>
              <p className="text-sm text-muted-foreground">{comic.publisher}</p>
            </div>
            <span className="text-lg font-bold text-primary ml-2">${comic.price}</span>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Button
              size="sm"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ComicCard;
