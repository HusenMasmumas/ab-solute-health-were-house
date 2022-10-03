import { useTranslation } from "react-i18next";
import NevigationPath, { INevigationPath } from "component/Path/nevigationPath";
import GreenButton from "component/Button/GreenButton";
import WhilteButton from "component/Button/whilteButton";
import DeepBlueButton from "component/Button/DeepBlue";
import LightBlueButton from "component/Button/LightBlueButton";
import BlueButton from "component/Button/BlueButton";


type colorButtons = 'green'|'whilte'|'light-blue'|'deep-blue'|'blue'
interface IButton {
  colorButton: colorButtons;
  keytext: string;
  fn: () => void;
}

type ICHeader = {
  keyHeader: string;
  nevigate?: {
    keytext: string;
    fn: () => void;
  };
  buttons?: IButton[];
  arrPath?: string[];
};

const CHeader = ({ keyHeader, nevigate, arrPath = [], buttons=[] }: ICHeader) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="grid grid-cols-2 pb-5 pt-5" style={{ position: "sticky", width: "100%", top: 0, zIndex:1, backgroundColor:'#F5F5F5'}}>
      <div className="w-full">
        <div className="text-[24px] text-darkblue font-bold">
          {i18n.exists(keyHeader) ? `${t(keyHeader)}` : keyHeader}
        </div>
        <NevigationPath textPath={arrPath} />
      </div>

      {/* {nevigate && (
        <div className="justify-end flex items-center ">
          <CreateButton onClick={nevigate.fn}>
            {`${t(nevigate.keytext)}`}
          </CreateButton>
        </div>
      )} */}

      <div className="justify-end flex items-center space-x-1.5">
        {
          buttons.map((element:IButton,index:number)=>{
            switch (element.colorButton) {
              case 'green':
                return <GreenButton key={index} onClick={element.fn}>{element.keytext}</GreenButton>
              case 'whilte':
                return <WhilteButton key={index} onClick={element.fn}>{element.keytext}</WhilteButton>
              case 'light-blue':
                return <LightBlueButton key={index} onClick={element.fn}>{element.keytext}</LightBlueButton>
              case 'deep-blue':
                return <DeepBlueButton key={index} onClick={element.fn}>{element.keytext}</DeepBlueButton>
              case 'blue':
                return <BlueButton key={index} onClick={element.fn}>{element.keytext}</BlueButton>
              default:
                return <WhilteButton key={index} onClick={element.fn}>{element.keytext}</WhilteButton>
            }
          })
        }
      </div>
    </div>
  );
};

export default CHeader;



