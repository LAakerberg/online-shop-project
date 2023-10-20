function CartContainer() {
  return (
    <div className="bg-white border border-gray-600 rounded-md mb-5 p-1 flex flex-col">
      <div className="max-w-lg flex flex-col p-2">Shopping cart is empty</div>
      <div className="flex flex-col p-2">hej</div>
    </div>
  );
}

export function Cart() {
  return (
    <div>
      <h3>Shopping cart</h3>
      <div>
        <CartContainer />
      </div>
    </div>
  );
}
