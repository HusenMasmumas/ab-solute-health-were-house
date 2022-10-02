import { Breadcrumb } from "antd";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
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
            <span className={clsx('text-[15px]', { 'text-[#01438F]': index == textPath.length - 1 })}>
              {i18n.exists(item) ? `${t(item)}` : item}
            </span>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default NevigationPath;
