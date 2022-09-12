import React from "react";
import { useTranslation } from "react-i18next";

const WarehouseManagement = () => {
  const { t } = useTranslation();
  return <div>{`${t("warehouseManagement")}`}</div>;
};

export default WarehouseManagement;
