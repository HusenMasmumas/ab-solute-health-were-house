import React from "react";
import { useTranslation } from "react-i18next";

const StoresBranches = () => {
  const { t } = useTranslation();
  return <div>{`${t("stores&branches")}`}</div>;
};

export default StoresBranches;
