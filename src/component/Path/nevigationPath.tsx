import React from "react";
import { Breadcrumb } from "antd";
import { useTranslation } from "react-i18next";

export type INevigationPath = {
  textPath: string[];
};

const NevigationPath = ({ textPath = [], ...props }: INevigationPath) => {
  const { t, i18n } = useTranslation();
  return (
    <Breadcrumb>
      {textPath.map((item, index) => {
        return (
          <Breadcrumb.Item key={index}>
            <span className="text-[15px]">
              {i18n.exists(item) ? `${t(item)}` : item}
            </span>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default NevigationPath;
