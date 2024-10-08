import React, { useEffect, useState } from "react";
import { useDatabase } from "../../hooks/useDatabase";
import { Checkbox, CheckboxProps, Divider, Image } from "antd";
import { useNavigate } from "react-router-dom";
import TagStatus from "../../components/Products/TagStatus";
import { tagStatus } from "../../constants/data";
import "./index.css";
import Loading from "../../components/Loading/loading";

const CheckboxGroup = Checkbox.Group;

const Products = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const indeterminate =
    checkedList.length > 0 && checkedList.length < tagStatus.length;
  const checkAll = tagStatus.length === checkedList.length;

  const { mutate: getDatabase, data: dataResult } = useDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    getDatabase();
  }, []);

  const handleClickPost = (id: string) => {
    navigate(`/products/${id}`);
  };

  const onChange = (list: string[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? tagStatus.map((tag) => tag.value) : []);
  };

  return (
    <div className="flex justify-center">
      <div className="container pt-20">
        <div className="flex items-center justify-center text-2xl font-bold py-6">
          <span className="shadow-custom py-2 px-4 rounded-2xl">Products</span>
        </div>
        <div className="grid grid-cols-[20%,80%]">
          <div>
            <div className="flex flex-col rounded-2xl mr-5 p-4 pt-4 shadow-custom gap-1">
              <span className="font-semibold text-lg">Category</span>
              <Checkbox
                className="text-base"
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                Check all
              </Checkbox>
              <CheckboxGroup
                className="pb-3 border-b-[1px] border-gray-400"
                options={tagStatus}
                value={checkedList}
                onChange={onChange}
              />
              <span className="font-semibold text-lg">Create at</span>
            </div>
          </div>
          {dataResult ? (
            <div className="grid grid-cols-3 gap-8 px-6">
              {dataResult.map((item) => (
                <div
                  className="flex flex-col rounded-2xl cursor-pointer shadow-custom hover:-translate-y-2 hover:shadow-[0px_10px_10px_#6e6e6e] hover:z-20 transition-transform duration-300 ease-in-out"
                  onClick={() => handleClickPost(item.id)}
                >
                  {item.cover && item.cover.external && (
                    <Image
                      className="w-full max-h-[250px] min-h-[250px] rounded-t-2xl"
                      src={item.cover.external.url}
                      preview={false}
                    />
                  )}
                  <div className="flex flex-col gap-2 p-4 justify-center">
                    {item.properties && (
                      <div className="flex flex-col gap-2 justify-center">
                        <span className="text-xl font-semibold">
                          {item.properties.Page.title[0].plain_text}
                        </span>
                        <span className="text-sm">
                          {item.properties.Description.rich_text[0] &&
                            item.properties.Description.rich_text[0].plain_text}
                        </span>
                      </div>
                    )}
                    {item.properties && item.properties.Tags.multi_select && (
                      <ul className="flex gap-1">
                        {item.properties.Tags.multi_select.map((tag: any) => (
                          <TagStatus tagItem={tag.name} />
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
