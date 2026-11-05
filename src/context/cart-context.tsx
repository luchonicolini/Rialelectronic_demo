"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import type { Product } from "@/data/mock-catalog";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isLoaded: boolean;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, openDrawer?: boolean) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  getItemQuantity: (productId: string) => number;
  totalItems: number;
  totalEstimatedUsd: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "rial_consultation_cart";

const SERVER_EMPTY_ITEMS: CartItem[] = [];

let memoryItems: CartItem[] = [];
let isStoreLoaded = false;
let listeners: Array<() => void> = [];

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

const cartStore = {
  subscribe(listener: () => void) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return memoryItems;
  },
  getServerSnapshot() {
    return SERVER_EMPTY_ITEMS;
  },
  getLoadedSnapshot() {
    return isStoreLoaded;
  },
  getServerLoadedSnapshot() {
    return false;
  },
  setItems(newItems: CartItem[]) {
    memoryItems = newItems;
    isStoreLoaded = true;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
      } catch {
        // Ignora errores si localStorage está deshabilitado
      }
    }
    notifyListeners();
  },
  init() {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            memoryItems = parsed;
          }
        }
      } catch {
        // Ignora errores de lectura
      }
      isStoreLoaded = true;
      notifyListeners();
    }
  },
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    cartStore.getServerSnapshot
  );

  const isLoaded = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getLoadedSnapshot,
    cartStore.getServerLoadedSnapshot
  );

  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    cartStore.init();

    // Sincronización multi-pestaña en tiempo real
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        cartStore.init();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const addItem = (product: Product, openDrawer: boolean = false) => {
    const existing = memoryItems.find((item) => item.product.id === product.id);
    if (existing) {
      cartStore.setItems(
        memoryItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      cartStore.setItems([...memoryItems, { product, quantity: 1 }]);
    }
    if (openDrawer) {
      setIsOpen(true);
    }
  };

  const removeItem = (productId: string) => {
    cartStore.setItems(
      memoryItems.filter((item) => item.product.id !== productId)
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    cartStore.setItems(
      memoryItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => cartStore.setItems([]);

  const isInCart = (productId: string) => {
    return items.some((item) => item.product.id === productId);
  };

  const getItemQuantity = (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
    return item ? item.quantity : 0;
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalEstimatedUsd = items.reduce(
    (acc, item) => acc + item.product.priceUsd * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isLoaded,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isInCart,
        getItemQuantity,
        totalItems,
        totalEstimatedUsd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
