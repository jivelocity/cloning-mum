import { Clock } from "lucide-react";

interface Props {
    text: string;
}

const SelectList:React.FC<Props> = ({
    text
}) => {
  return (
    <div className="bg-[#1A1A19] text-stone-400 border border-stone-800 rounded py-3 px-4  ">
        <div className="flex justify-between items-center w-full">
            <h1>{text}</h1>
            <Clock size={16} />
        </div>
    </div>
  )
}

export default SelectList;
