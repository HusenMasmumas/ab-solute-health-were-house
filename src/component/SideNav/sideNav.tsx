import styled from "styled-components";
import { Menu } from "antd";
const CustomMenu = styled(Menu)`
    .ant-menu-submenu-open{
        background-color: white ;
        color: rgb(101, 101, 101) ;
    }

    .ant-menu-submenu-arrow {
        :hover{
                color:#FFF !important
        }
    }
 `


export default CustomMenu