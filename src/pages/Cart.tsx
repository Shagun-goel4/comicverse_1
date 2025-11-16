import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success("Order placed!", {
      description: "Thank you for your simulated order! This is a demo store.",
    });
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Start adding some amazing comics to your collection!
          </p>
          <Link to="/browse">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Browse Comics
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 bg-hero-gradient bg-clip-text text-transparent">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="bg-card border-border p-4">
                <div className="flex gap-4">
                  <Link to={`/comic/${item.id}`} className="flex-shrink-0">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-24 h-36 object-cover rounded border border-border hover:shadow-glow-primary transition-shadow"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link to={`/comic/${item.id}`}>
                      <h3 className="font-bold text-lg mb-1 hover:text-primary transition-colors truncate">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.publisher} • Issue #{item.issueNumber}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => {
                        removeItem(item.id);
                        toast.success("Removed from cart");
                      }}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                    <span className="font-bold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-card border-border p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-accent">FREE</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${getTotal().toFixed(2)}</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full mb-3 bg-primary hover:bg-primary/90 shadow-glow-primary"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              
              <Link to="/browse">
                <Button size="lg" variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
