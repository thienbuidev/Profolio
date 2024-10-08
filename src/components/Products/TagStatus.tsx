import { Tag } from "antd";
import { tagStatus } from "../../constants/data";

interface Props {
  tagItem: string;
}

const TagStatus = ({ tagItem }: Props) => {
  return (
    <>
      {tagStatus
        .filter((item) => item.value === tagItem)
        .map((item) => (
          <Tag color={item.color}>{item.value}</Tag>
        ))}
    </>
  );
};

export default TagStatus;
