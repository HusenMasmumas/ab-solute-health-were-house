import { useTranslation } from "react-i18next";

const OverAllPage = () => {
  const { t } = useTranslation();
  return <div>{`${t("overAll")}`}</div>;
};

export default OverAllPage;
