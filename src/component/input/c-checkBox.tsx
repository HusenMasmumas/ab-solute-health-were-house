import { Checkbox, CheckboxProps } from 'antd';
interface Props extends CheckboxProps {
    label:string
}

const CCheckBox = ({label, ...props}: Props) => {
  return (
    <Checkbox {...props}>{label}</Checkbox>
  )
}

export default CCheckBox