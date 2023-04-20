import React from "react"
import Btn from "./Button"
const ProductCard = ({ product }) => {
	return (
		<div className='card w-[15rem] shadow-md  rounded-lg'>
			<img
				className='w-[15rem] rounded-t-lg'
				src={product.images}
				alt='product_image'
			/>
			<h4 className='p-3 font-bold truncate'>{product.title}</h4>
			<div className='px-3  '>${product.price}</div>
			<p className='px-3 opacity-70 line-clamp-3'>{product.description}</p>
			<small className='p-3 opacity-60'>{product.creationAt}</small>
			<div className='btn-group space-x-3 m-3 relative bottom-0'>
				<Btn
					title={"Buy now"}
					btnStyle={"py-2 px-3 bg-green-400 rounded-lg "}
				/>
				<Btn
					title={"add to card"}
					btnStyle={"py-2 px-3 border rounded-lg border-green-400"}
				/>
			</div>
		</div>
	)
}

export default ProductCard
