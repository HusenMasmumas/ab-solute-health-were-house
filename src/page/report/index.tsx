import React from "react";
import { useTranslation } from "react-i18next";

const Report = () => {
  const { t } = useTranslation();
  return <div>{`${t("report")}`}</div>;
};

export default Report;
