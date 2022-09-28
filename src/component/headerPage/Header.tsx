import { Button } from "antd";
import { useTranslation } from "react-i18next";
import React from "react";
import NevigationPath, { INevigationPath } from "component/Path/nevigationPath";
import CreateButton from "component/Button/CreateButton";

type ICHeader = {
  keyHeader: string;
  nevigate?: {
    keytext: string;
    fn: () => void;
  };
  arrPath?: string[];
};

const CHeader = ({ keyHeader, nevigate, arrPath = [], ...props }: ICHeader) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="grid grid-cols-2">
      <div className="w-3/5 ">
        <div className="text-[24px] text-darkblue font-bold">
          {i18n.exists(keyHeader) ? `${t(keyHeader)}` : keyHeader}
        </div>
        <NevigationPath textPath={arrPath} />
      </div>

      {nevigate && (
        <div className="justify-end flex items-center ">
          <CreateButton onClick={nevigate.fn}>
            {`${t(nevigate.keytext)}`}
          </CreateButton>
        </div>
      )}
    </div>
  );
};

export default CHeader;
