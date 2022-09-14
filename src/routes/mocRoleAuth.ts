export const mocRoleAuth = {
  menuAccess: [
    {
      keyName: "home",
      title_en: "home",
      title_th: "หน้าแรก",
      AccessPermission: ["create", "update", "delete", "viewers"],
    },
    {
      keyName: "dashboard",
      title_en: "Dashboard",
      title_th: "แดชบอร์ด",
      AccessPermission: ["create", "update", "delete", "viewers"],
    },
    {
      keyName: "settings",
      title_en: "Setting",
      title_th: "ตั้งค่า",
      AccessPermission: ["create", "update", "delete", "viewers"],
    },
  ],
  role: {
    admin: [
      {
        keyName: "dashboard",
        title_en: "Dashboard",
        title_th: "แดชบอร์ด",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
      {
        keyName: "settings",
        title_en: "Setting",
        title_th: "ตั้งค่า",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
    ],
    member: [
      {
        keyName: "dashboard",
        title_en: "Dashboard",
        title_th: "แดชบอร์ด",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
      {
        keyName: "over-all",
        title_en: "Over all",
        title_th: "ภาพรวม",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },

      {
        keyName: "warehouse-management",
        title_en: "Warehouse management",
        title_th: "จัดการคลังสินค้า",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
      {
        keyName: "purchase-order",
        title_en: "Purchase order",
        title_th: "ใบสั่งซื้อ",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
      {
        keyName: "report",
        title_en: "Report",
        title_th: "รายงาน",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },

      {
        keyName: "stores-branches",
        title_en: "Stores branches",
        title_th: "ร้านค้า & สาขา",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },

      {
        keyName: "manage-user",
        title_en: "Manage user",
        title_th: "จัดการผู้ใช้",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
      {
        keyName: "manage-warehouse-management",
        title_en: "Warehouse management",
        title_th: "จัดการคลังสินค้า",
        AccessPermission: ["create", "update", "delete", "viewers"],
      },
    ],
  },
};
