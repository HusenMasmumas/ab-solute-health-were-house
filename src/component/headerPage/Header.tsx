import { useTranslation } from "react-i18next";
import NevigationPath, { INevigationPath } from "component/Path/nevigationPath";
import GreenButton from "component/Button/GreenButton";
import WhilteButton from "component/Button/whilteButton";
import DeepBlueButton from "component/Button/DeepBlue";
import LightBlueButton from "component/Button/LightBlueButton";
import BlueButton from "component/Button/BlueButton";
import { Image } from 'antd';
import Printer from "assets/img/Printer.png";
type colorButtons = 'green'|'whilte'|'light-blue'|'deep-blue'|'blue'|'print'
export interface IButton {
  colorButton: colorButtons;
  keytext: string;
  fn: () => void;
}

type ICHeader = {
  keyHeader: string;
  buttons?: IButton[];
  arrPath?: string[];
};


const CHeader = ({ keyHeader, arrPath = [], buttons=[] }: ICHeader) => {
  const { t, i18n } = useTranslation();
  const getText = (keytext:string)=>{
    return i18n.exists(keytext) ? `${t(keytext)}` : keytext
  }
  return (
    <div className="grid grid-cols-2 pb-5 pt-5">
      <div className="w-full">
        <div className="text-[24px] text-darkblue font-bold">
          {i18n.exists(keyHeader) ? `${t(keyHeader)}` : keyHeader}
        </div>
        <NevigationPath textPath={arrPath} />
      </div>
      <div className="justify-end flex items-start space-x-4">
        {
          buttons.map(({keytext, fn, colorButton}:IButton,index:number)=>{
            switch (colorButton) {
              case 'green':
                return <GreenButton key={index} onClick={fn}>{getText(keytext)}</GreenButton>
              case 'whilte':
                return <WhilteButton key={index} onClick={fn}>{getText(keytext)}</WhilteButton>
              case 'light-blue':
                return <LightBlueButton key={index} onClick={fn}>{getText(keytext)}</LightBlueButton>
              case 'deep-blue':
                return <DeepBlueButton key={index} onClick={fn}>{getText(keytext)}</DeepBlueButton>
              case 'blue':
                return <BlueButton key={index} onClick={fn}>{getText(keytext)}</BlueButton>
              case 'print':
                return (
                  <div  key={index}  className="h-full flex items-center">
                    <div className='!h-[35px] !w-[35px] hover:cursor-pointer flex items-center justify-center bg-white'>
                      <Image src={Printer} alt="excel" preview={false} onClick={fn}  className='!h-[28px] !w-[28px]'/>
                    </div>
                  </div>
                )
              default:
                return <WhilteButton key={index} onClick={fn}>{getText(keytext)}</WhilteButton>
            }
          })
        }
      </div>
    </div>
  );
};

export default CHeader;



