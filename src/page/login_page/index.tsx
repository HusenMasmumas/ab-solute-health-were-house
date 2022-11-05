import { Checkbox, Form } from "antd";
import "../../styles/tailwind.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuthContextDispatch } from "context/Auth/store";
import Logo from "assets/img/logo.png";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import CInput from "component/input/c-input";
import DeepBlueButton from "component/Button/DeepBlue";
import { useLogin } from "service/auth";
import CImage from "component/Image/CImage";
const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { _signIn, _setLoading } = useAuthContextDispatch();
  const uselogin = useLogin();
  const onFinish = (values: any) => {
    uselogin.mutate(values, {
      onSuccess: (res) => {
        console.log("sucess", res);
        _signIn({
          token: { accessToken: res.accessToken },
          userInfo: {
            id: "",
            email: "",
            role: res.role,
            firstName: res.firstName,
            lastName: res.lastName,
            image: res.image,
          },
        });
        navigate("/", { replace: true });
      },
      onError: (error: any) => {
        alert(error);
      },
    });
  };

  return (
    <div className="min-w-screen min-h-screen grid grid-cols-7">
      <div className="lg:block lg:col-span-4 hidden ">
        <div
          className="h-48 p-4 z-40 absolute top-0">
          <div className="text-[#4E8FCC] text-[50px] font-bold">WEREHOUSE</div>
          <div className="text-[#01438F] text-[60px] font-bold">ABSOLUTE HEALTH</div>
        </div>
        <div
          className="bg-cover bg-no-repeat w-screen h-screen bg-[url('/src/assets/img/login3.jpg')]"
          style={{
            backgroundPosition: "center right 200px",
          }}
        >
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(145deg, white, rgba(255, 255, 255, 0.3)`,
            }}
          />
        </div>
      </div>
      <div className="w-full h-full lg:col-span-3 col-span-7 bg-white z-30">
        <div className="w-full h-full bg-slate-0 flex flex-col items-center justify-center">
          <CImage
            className="!h-[200px] !bg-[#FFF] flex justify-center items-center px-[40px]"
            src={Logo}
            preview={false}
          />
          <h1 className="text-[#949594] !font-semibold !text-[20px]">
            Login in your account to continue.
          </h1>
          <Form
            name="basic"
            form={form}
            onFinish={onFinish}
            layout="vertical"
            autoComplete="off"
            className="w-4/5"
            requiredMark={false}
          >
            <Form.Item
              label={
                <span className="!text-[20px] text-[#01438F] font-semibold ">
                  ชื่อผู้ใช้
                </span>
              }
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <CInput
                className="w-full !h-12 !p-4 !border-l-[6px] !border-[#2053a4] !text-xl text-black !shadow-none"
                placeholder="ชื่อผู้ใช้"
                prefix={<UserOutlined className="!text-[#2053a4]" />}
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="!text-[20px] text-[#01438F] font-semibold">
                  รหัส
                </span>
              }
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <CInput
                className="w-full !h-12 !p-4 !border-l-[6px] !border-[#2053a4] !text-xl text-black !shadow-none"
                placeholder="Password"
                type={"password"}
                prefix={<KeyOutlined className="!text-[#2053a4]" />}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>จำรหัสผ่าน</Checkbox>
            </Form.Item>
            <DeepBlueButton
              className="!w-full"
              type="primary"
              onClick={() => {
                form.submit();
              }}
            >
              เข้าสู่ระบบ
            </DeepBlueButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
