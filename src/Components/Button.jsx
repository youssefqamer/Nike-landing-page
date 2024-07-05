
const Button = ({label,iconUrl,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg ${backgroundColor?`${backgroundColor} ${borderColor} ${textColor}`:'bg-coral-red text-white border-coral-red' } leading-none  rounded-full ${fullWidth?'w-full':''}  `}>
        {label}
        {iconUrl&&<img src={iconUrl} alt="" className="ml-2 rounded-full w-5 h-5" />
}
    </button>
  )
}

export default Button