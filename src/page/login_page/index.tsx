import { Checkbox, Image, Form } from "antd";
import "../../styles/tailwind.css";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuthContextDispatch } from "context/Auth/store";
import LoginImg from "assets/img/login.jpg";
import Logo from "assets/img/logo.png";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import CInput from "component/input/c-input";
import DeepBlueButton from "component/Button/DeepBlue";
import { useLogin } from "service/auth";
const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { _signIn } = useAuthContextDispatch();
  const uselogin = useLogin();
  const onFinish = (values: any) => {
    uselogin.mutate(values, {
      onSuccess: (res) => {
        console.log("sucess", res);
        _signIn({
          token: { accessToken: res.accessToken },
          userInfo: { id: "", email: "", role: res.role, firstName: res.firstName, lastName: res.lastName, image: res.image},
        });
        navigate("/", { replace: true });
      },
      onError: (error: any) => {
        alert(error);
      },
    });
  };
  return (
    <div className="min-w-screen min-h-screen grid grid-cols-7 !text-white">
      <div className="col-span-4">
        <Image
          src={LoginImg}
          alt="login.jpg"
          preview={false}
          style={{ height: "100vh" }}
        />
      </div>
      <div className="w-full h-full bg-slate-0 flex flex-col gap-6 items-center justify-center  p-[6rem] col-span-3">
        <Image
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
          // onFinishFailed={onFinishFailed}
          layout="vertical"
          autoComplete="off"
          className="w-4/5"
          requiredMark={false}
        >
          <Form.Item
            label={
              <div className="!text-[20px] text-[#01438F] font-semibold ">
                ชื่อผู้ใช้
              </div>
            }
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <CInput
              className="w-full !h-12 !p-4 !border-l-[6px] !border-[#2053a4] !text-xl text-black"
              placeholder="ชื่อผู้ใช้"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            label={
              <div className="!text-[20px] text-[#01438F] font-semibold">
                รหัส
              </div>
            }
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <CInput
              className="w-full !h-12 !p-4 !border-l-[6px] !border-[#2053a4] !text-xl text-black"
              placeholder="Password"
              type={"password"}
              prefix={<KeyOutlined />}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
              จำรหัสผ่าน
              {/* <span className="text-[#949594]">จำรหัสผ่าน</span> */}
            </Checkbox>
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
  );
};

export default LoginPage;
