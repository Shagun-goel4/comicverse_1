import { Link } from "react-router-dom";
import { ShoppingCart, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

const Header = () => {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <Book className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
          <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            ComicVerse
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/browse" className="text-foreground hover:text-primary transition-colors">
            Browse Comics
          </Link>
        </nav>

        <Link to="/cart">
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse-glow">
                {itemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
