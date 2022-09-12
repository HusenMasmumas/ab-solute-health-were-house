import React from "react";
import { useTranslation } from "react-i18next";

const ManageUser = () => {
  const { t } = useTranslation();
  return <div>{`${t("manageUser")}`}</div>;
};

export default ManageUser;
