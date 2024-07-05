import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,name,price,rating}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280] h-[280]" />
        <div className="mt-8 flex-col justify-start gap-2.5">
<div className="flex gap-2">
<img src={star} alt="rating" width={24} height={24} />
<p className="mt-1 font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
</div>
            <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">{name}</h3>
            <p className="mt-2 text-2xl font-montserrat text-coral-red font-semibold leading-normal">{price}</p>
        </div>
    </div>
  )
}

export default PopularProductCard