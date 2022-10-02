import { Button } from "antd";
import { useTranslation } from "react-i18next";
import React from "react";
import NevigationPath, { INevigationPath } from "component/Path/nevigationPath";
import CreateButton from "component/Button/CreateButton";
import GreenButton from "component/Button/GreenButton";
import WhilteButton from "component/Button/whilteButton";
import DeepBlueButton from "component/Button/DeepBlue";
import LightBlueButton from "component/Button/LightBlueButton";
import BlueButton from "component/Button/BlueButton";


type colorButtons = 'green'|'whilte'|'light-blue'|'deep-blue'
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

      {/* <GreenButton>สร้างใบสั่งซื้อ</GreenButton>
      <WhilteButton>ขาว</WhilteButton>
      <BlueButton>Blue</BlueButton>
      <DeepBlueButton>Deep Blue</DeepBlueButton> */}

      <div className="justify-end flex items-center">
        {
          buttons.map((element:IButton)=>{
            switch (element.colorButton) {
              case 'green':
                return <GreenButton onClick={element.fn}>{element.keytext}</GreenButton>
                break;
              case 'whilte':
                return <WhilteButton onClick={element.fn}>{element.keytext}</WhilteButton>
                break;
              case 'light-blue':
                return <LightBlueButton onClick={element.fn}>{element.keytext}</LightBlueButton>
                break;
              case 'deep-blue':
                return <DeepBlueButton onClick={element.fn}>{element.keytext}</DeepBlueButton>
                break;
              default:
                return <WhilteButton onClick={element.fn}>{element.keytext}</WhilteButton>
                break;
            }
          })
        }
      </div>
    </div>
  );
};

export default CHeader;



