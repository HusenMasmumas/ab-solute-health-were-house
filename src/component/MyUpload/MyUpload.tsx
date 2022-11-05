import { Avatar, Upload, UploadProps } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { RcFile, UploadChangeParam, UploadFile } from "antd/lib/upload";
import { getBase64 } from "utils/utils";

interface Props {
  imageRender?: string | undefined;
  onChange?: (value: any) => void;
}
const MyUpload = ({ imageRender, onChange }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const dummyRequest = ({ onSuccess }: any) => {
    onSuccess("ok");
  };
  useEffect(()=>{
    setImageUrl(imageRender)
  },[imageRender])
  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url: string) => {
        setLoading(false);
        setImageUrl(url);
        onChange &&
          onChange({
            imageRender: url,
            file: info.file.originFileObj,
          });
      });
    }
  };
  return (
      <Upload
        name="avatar"
        showUploadList={false}
        // beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={dummyRequest}
      >
        <div className="relative">
          {imageUrl ? (
            <div className="static h-[150px] w-[150px] rounded-full ">
              <img
                src={imageUrl}
                alt="avatar"
                style={{ width: "100%", borderRadius: "100%" }}
              />
            </div>
          ) : (
            <Avatar 
              size={140} 
              icon={<UserOutlined />} 
            />
          )}

          <div className=" bg-green w-[50px] h-[50px] outline outline-offset-1 outline-1 outline-white rounded-full flex justify-center items-center absolute right-[5px] bottom-[5px]">
            <PlusOutlined style={{ fontSize: 25, color: "white" }} />
          </div>
        </div>
      </Upload>
  );
}
export default MyUpload;
