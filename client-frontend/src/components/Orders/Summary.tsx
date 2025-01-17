interface SummaryProps {
  totalPrice: any;
  totalQuantity: any;
}

const Summary: React.FC<SummaryProps> = ({totalPrice, totalQuantity}) => {

    return (
        <>
            <div id="summary" className="w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

                <div className="flex justify-between mt-10">
                    <span className="font-semibold text-sm uppercase">Items {totalQuantity}</span>
                    <span className="font-semibold text-sm">R$ {totalPrice}</span>
                </div>

                {/* <div>
                    <label className="font-medium inline-block mb-3 text-sm uppercase">Payment</label>
                    <select className="block p-2 text-gray-600 w-full text-sm">
                        <option>PIX</option>
                        <option>Cartão</option>
                        <option>Débito</option>
                        <option>Dinheiro</option>
                    </select>
                </div> */}

                <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>R$ {totalPrice}</span>
                    </div>
                    {/* <button 
                        className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                        onClick={() => handleCheckout(token)}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <ClipLoader color="white" size={20} />
                        ) : (
                            "Checkout"
                        )}
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default Summary
