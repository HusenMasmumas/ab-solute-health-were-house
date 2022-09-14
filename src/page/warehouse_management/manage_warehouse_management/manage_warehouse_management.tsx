import { Button } from "antd";
import { useTranslation } from "react-i18next";

const ManageWarehouseManagement = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-darkblue font-[600] text-[30px] !mb-0">{`${t(
            "warehouseManagement"
          )}`}</h1>
          <p className="!mb-0 text-darkblue">{`${t("จัดการคลังสินค้า")}`}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-end items-center">
          <Button
            style={{
              height: "40px",
              borderRadius: "4px",
              fontSize: "20px",
            }}
          >
            ยกเลิก
          </Button>
          <Button
            style={{
              height: "40px",
              borderRadius: "4px",
              backgroundColor: "#77C48B",
              color: "white",
              fontSize: "20px",
            }}
          >
            บันทึก
          </Button>
        </div>
      </div>
      <div className="bg-white py-[16px] px-[24px]">
        <div className="text-lightblue text-[22px]">
          <span>ข้อมูลตู้เก็บสินค้า</span>
        </div>
        <div className="border-b-[0.1px] my-[16px] border-lightblue"></div>
      </div>
    </div>
  );
};
export default ManageWarehouseManagement;
