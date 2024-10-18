"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/cartSlice";
import { RootState } from "../../redux/store";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function CartDisplay() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeItem(id));
    }
  };

  if (cartItems.length === 0) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">Your cart is empty</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center py-2 border-b"
          >
            <span className="font-medium">{item.name}</span>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <span className="mx-2">{item.quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <span className="ml-4">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <p>Total Items: {totalQuantity}</p>
          <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <Link href="/checkout" passHref>
          <Button>Checkout</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
