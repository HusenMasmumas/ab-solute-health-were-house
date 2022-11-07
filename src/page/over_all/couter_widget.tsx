import { Divider } from "antd";
import { ReactComponent as ArrowIcon } from "assets/Icon/Arrow.svg";
import CImage from "component/Image/CImage";
type Props = {
    icon: string
    name:string
    display:number
};

const CouterWidget = ( {icon, name, display}: Props) => {
  return (
    <div className="grid xl:col-span-3 md:col-span-6">
      <div className="bg-white px-[24px] pt-[16px] py-[10px] rounded-[10px]">
        <p className="!mb-0">{name}</p>
        <Divider />
        <div className="grid grid-cols-4">
          <div className="h-[65px] w-[65px] col-span-1">
            <CImage src={icon} alt="dashboard" preview={false} />
          </div>
          <div className="text-[22px] md:text-[26px] lg:text-[32px] font-semibold text-[#0F1B45] col-span-2 text-center">
            {`${display} K`}
          </div>
          <div className="text-lightblue flex items-end justify-end pt-[40px] col-span-1">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouterWidget;
