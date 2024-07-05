import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer" className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex-col text-center justify-center items-center gap-2.5">
            <div className=" flex justify-center items-center ">
            <img src={star} alt=""  width={24} height={24} className=" m- pb-1 object-contain"/>
            <p className="ml-3 text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h4 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h4>
        </div>
    </div>
  )
}

export default ReviewCard