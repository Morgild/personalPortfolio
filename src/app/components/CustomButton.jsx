export const CustomButton = (props) => {
  return (
    <div
      className={`flex justify-center w-fit bg-main text-white md:py-3 py-1.5 md:px-6 px-3 rounded-full cursor-pointer`}
    >
      <p className="font-semibold truncate">{props.text}</p>
    </div>
  );
};
