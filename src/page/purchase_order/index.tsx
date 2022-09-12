import React from "react";
import { useTranslation } from "react-i18next";

const PurchaseOrder = () => {
  const { t } = useTranslation();
  return <div>{`${t("purchaseOrder")}`}</div>;
};

export default PurchaseOrder;
