import { Dropdown, Menu, MenuProps, ConfigProvider } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import styled from "styled-components";

interface Props  {
    background: string;
    hoverBackground?: string;
    selection: ISelectTable;
}

interface ISelectTable {
  title: string,
  option: IOptionTable[]
}

interface IOptionTable {
  label: string,
  value: any,
  action: (values?: any) => void;
}

interface IStyleMenu extends MenuProps , Omit<Props, 'selection'> {}

const StyledMenu = styled(Menu)<IStyleMenu>`
  padding: 0px;
  background-color: ${({ background }) => background} !important;
  color: #fff;
  
  .ant-dropdown-menu-item {
    color:#fff !important;
    &:hover{
      background-color: ${({ hoverBackground }) => hoverBackground} !important;
    }
  }
`

const StyleDropdown = styled(Dropdown)<{cursor:boolean}>`
  &:hover{
    cursor: pointer !important; 
    cursor: ${({ cursor }) => cursor ? 'pointer' : 'default' } !important; 
  }
`

const CDropDown = ({ background, hoverBackground, selection}: Props) => {

    const { option=[] } = selection

    const handleMenuClick = (e:any) => {
        const find = option.find(item=> item.label === e.key)
        if(find){
          find.action(find.value)
        }
    }

    const menu = (
        <StyledMenu
          background={background}
          hoverBackground={hoverBackground}
          onClick={handleMenuClick}
          items={ option.map((item:IOptionTable) => (
                {
                  label:item.label,
                  key: item.label,
                }
          )) } 
        />
    );

  return (
    <ConfigProvider getPopupContainer={(trigger:any) => trigger.parentElement}>
      <StyleDropdown 
        overlay={menu} 
        trigger={['click']}
        cursor={ option.length > 0 ? true : false}
        >
          <div className={`flex items-center text-white h-[40px] rounded-md px-4 !w-[130px]`} style={{backgroundColor:background}}>
            <div className='!w-[100px] text-center '>
              {selection.title}
            </div>
            { option.length > 0 && <DownOutlined />}
          </div>
      </StyleDropdown>
    </ConfigProvider>
  )
}

export default CDropDown