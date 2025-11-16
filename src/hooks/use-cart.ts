import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Comic } from "@/data/comics";

interface CartItem extends Comic {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (comic: Comic) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (comic) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === comic.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === comic.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...comic, quantity: 1 }] };
        });
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "comicverse-cart",
    }
  )
);
