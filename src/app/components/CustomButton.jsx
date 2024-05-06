export const CustomButton=(props)=>{

    return (
        <div className={`flex justify-center w-fit bg-${props.bgColor} text-white py-3 px-6 rounded-full`}>
            <p className="font-semibold truncate">{props.text}</p>
        </div>
    )
}