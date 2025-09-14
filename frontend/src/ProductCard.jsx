const ProductCard = () => {
    // const productName="Pepsi"
    // const price=20
    
    return (
        <div className=" border-1 border-black w-[300px] flex flex-col items-center gap-10 py-4 rounded-2xl bg-amber-50 ">
            <img src="./pepsi.jpg" alt="" className="w-[200px] h-[200px] border-2 border-gray-600 rounded-full"/>
           <div className="flex flex-col items-center gap-5 ">
            <h2 className="font-bold text-4xl text-blue-600">Pepsi</h2>
            <p className="text-xl text-gray-700 text-center">Cold Drink </p>
            <p className="text-lg font-bold text-orange-400">20</p>
            </div>
            <button className="bg-blue-200 w-[50%] py-1 rounded-2xl cursor-pointer hover:bg-blue-500">Add to Cart</button>
        </div>
    )
}
export default ProductCard