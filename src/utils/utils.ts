export const _findObjectOfArrayByKeyName = (
  array: { [key: string]: any }[],
  value: number | string,
  keyName: string
): { [key: string]: any } | null => {
  const obj = array.find((x) => x[keyName] === value);
  return !!obj ? obj : null;
};

export const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
