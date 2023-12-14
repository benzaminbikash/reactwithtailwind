import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { decreaseCart, increaseCart } from "../redux/cartSlice";
function Cart() {
  const state = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();
  let totalAmount = 0;
  let calculatetotal = state.map((item) => {
    totalAmount += item.qty * item.price;
  });

  return (
    <div className="mx-auto container px-20">
      {state.length == 0 ? (
        <h1>Empty Carts</h1>
      ) : (
        <div>
          <h1>My Carts List:</h1>
          <div className="grid gap-4 grid-cols-3  mt-4">
            {/* left */}
            <div className="text-2xl col-span-2 ">
              <p>Products</p>
              <div className="border w-full p-2 mt-2 rounded-md">
                {state.map((item, index) => {
                  return (
                    <div className="flex justify-between items-center">
                      <p className="w-[40%] text-sm ">{item.title}</p>
                      <div className="flex  gap-2 items-center">
                        <IoIosRemoveCircle
                          onClick={() => {
                            dispatch(decreaseCart(item));
                          }}
                        />
                        <p>{item.qty}</p>
                        <IoIosAddCircle
                          onClick={() => {
                            dispatch(increaseCart(item));
                          }}
                        />
                      </div>
                      <p className="text-sm">${item.price * item.qty}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* right */}
            <div className="text-2xl ">
              <p>Checkout</p>
              <div className="bg-red-500 w-full rounded-lg px-4">
                <p className="text-sm"> Do you want to order?</p>
                <hr />
                {state.map((item) => {
                  return <h1 className="text-sm mt-2">{item.title}</h1>;
                })}
                <button className="bg-green-500 my-4 w-full text-sm p-2">
                  Check Out
                </button>
              </div>
            </div>
          </div>
          <p className="mt-4">Total Amount: ${totalAmount}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
