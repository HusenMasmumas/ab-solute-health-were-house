import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import generatePicker from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";

const CDate = generatePicker<Dayjs>(dayjsGenerateConfig);

export default CDate;
