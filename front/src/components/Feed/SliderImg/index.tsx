import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";

const SliderImg = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange = (info: UploadChangeParam<UploadFile<any>>) => {
    setFileList(info.fileList);
  };

  const onPreview = async (file: UploadFile<any>) => {
    let src = file.url;
    const image = new Image();
    image.src = src!;
  };

  return (
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 10 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default SliderImg;
