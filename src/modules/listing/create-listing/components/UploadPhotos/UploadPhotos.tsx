import { useState } from "react";
import { Upload, Button, message, UploadFile, UploadProps } from "antd";

import ICBlurryImage from "@/components/Icons/StayIcons/ICBlurryImage";
import ICCamera from "@/components/Icons/StayIcons/ICCamera";
import ICLeft from "@/components/Icons/DirectionIcons/ICLeft";

import Container from "../Container";
import Heading from "../Heading";

interface UploadPhotosProps {
  handleNextMainStep: () => void;
  handlePrevMainStep: () => void;
}

function UploadPhotos({
  handleNextMainStep,
  handlePrevMainStep,
}: UploadPhotosProps) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [currentSubStep, setCurrentSubStep] = useState(0); // chuyển step

  const handleBeforeUpload = (file: UploadFile) => {
    if (fileList.length < 5) {
      message.error("Vui lòng tải ít nhất 5 file");
      return false;
    }
    if (fileList.length > 8) {
      message.error("Bạn chỉ có thể tải lên tối đa 8 file!");
      return false;
    }
    setFileList((prevList) => [...prevList, file]);
    return false; // Ngăn việc upload tự động
  };

  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => prevList.filter((f) => f.uid !== file.uid));
  };

  const handleSubmit = () => {
    if (fileList.length === 0) {
      message.error("Bạn cần tải lên ít nhất 1 file.");
      return;
    }

    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file as any); // Thêm file vào form data
    });

    // Giả lập API request
    fetch("https://www.mocky.io/v2/5cc8019d300000980a055e76", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        message.success("Tải lên thành công!");
        setFileList([]);
      })
      .catch(() => {
        message.error("Tải lên thất bại, vui lòng thử lại.");
      });
  };

  const props: UploadProps = {
    fileList, // File list sẽ hiện trên UI
    beforeUpload: handleBeforeUpload, // Ngăn upload tự động
    onRemove: handleRemove, // Xử lý khi xoá file
    maxCount: 8,
  };

  // xử lý chuyển hướng
  const subSteps = [];

  const totalSubSteps = subSteps.length;
  const handleNextSubStep = () => {
    //validate
    if (currentSubStep < totalSubSteps - 1) {
      setCurrentSubStep(currentSubStep + 1);
    } else {
      handleNextMainStep();
    }
  };

  const handlePrevSubStep = () => {
    //validate
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else {
      handlePrevMainStep();
    }
  };

  return (
    <Container isWideContainer>
      <Heading
        title="Chỗ nghỉ của Quý vị trông như thế nào?"
        size="3xl"
        bottom={4}
      />

      <div className="bg-white shadow p-6 rounded-lg">
        <p className="text-gray-700 mb-4">
          <strong>Đăng tải ít nhất 5 ảnh của chỗ nghỉ.</strong> Càng đăng nhiều,
          Quý vị càng có cơ hội nhận đặt phòng. Quý vị có thể thêm ảnh sau.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <ICBlurryImage />
            </div>
            <p className="text-gray-700 mb-2">Kéo và thả hoặc</p>

            <Upload {...props} listType="picture" maxCount={8}>
              <Button icon={<ICCamera fillColor={"#4096ff"} />}>
                Đăng tải ảnh
              </Button>
            </Upload>

            <p className="text-gray-500 mt-4">
              jpg/jpeg hoặc png, tối đa 1MB mỗi file
            </p>
          </div>
        </div>
      </div>

      {/* Nút Submit để test*/}
      <div className="mt-4 text-center">
        <Button type="primary" onClick={handleSubmit}>
          Upload các ảnh đã chọn(test)
        </Button>
      </div>

      <div className="flex mt-10 gap-[6px]">
        <button
          onClick={handlePrevSubStep}
          className="create-listing-prev-button flex justify-center items-center py-2 px-4 border-[1px] border-blue-500 rounded-md"
        >
          <ICLeft width="35px" />
        </button>

        <button
          onClick={handleNextSubStep}
          className="create-listing-next-button flex-1 text-center p-3 bg-blue-500 text-white rounded-md"
        >
          Tiếp tục
        </button>
      </div>
    </Container>
  );
}

export default UploadPhotos;
// render
// xử lý validate 
// xử lý error