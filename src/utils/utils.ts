export const _findObjectOfArrayByKeyName = (
  array: { [key: string]: any }[],
  value: number | string,
  keyName: string
): { [key: string]: any } | null => {
  const obj = array.find((x) => x[keyName] === value);
  return !!obj ? obj : null;
};

export const createQueryString = (values: any) => {
  if (!values) {
    return "";
  }
  let query = "";
  let result = {};
  for (const [key, value] of Object.entries(values)) {
    if (value || value === 0 || value === false) {
      result = { ...result, [key]: value };
    }
  }
  Object.entries(result).forEach(([key, value], index) => {
    if (index === Object.keys(result).length - 1) {
      if (value || value === 0 || value === false) {
        query += `${key}=${value}`;
      }
    } else {
      if (value || value === 0 || value === false) {
        query += `${key}=${value}&`;
      }
    }
  });
  return "?" + query;
};
export const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
