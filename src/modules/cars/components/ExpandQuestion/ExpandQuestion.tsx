import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import ItemsHead from "@/components/ItemsHead/ItemsHead";
import "./ExpandQuestion.scss";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const itemsLeft: CollapseProps["items"] = [
  {
    key: "1",
    label: "Tại sao tôi nên đặt thuê xe ở Việt Nam với Booking.com?",
    children: (
      <p className="flex flex-col gap-4">
        <div>
          Chúng tôi tạo điều kiện dễ dàng để bạn tìm xe thuê phù hợp với nhu cầu
          của mình. Sau đây là những gì chúng tôi mang lại:
        </div>
        <ul>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>Bộ sưu tập xe khổng lồ – từ xe hạng nhỏ đến SUV</span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>Hỗ trợ hơn 30 ngôn ngữHỗ trợ hơn 30 ngôn ngữ</span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>
              Miễn phí hủy đến 48 giờ trước khi nhận xe cho hầu hết các đơn đặt.
            </span>
          </li>
        </ul>
      </p>
    ),
  },
  {
    key: "2",
    label: "Tôi cần chuẩn bị gì để thuê một chiếc xe?",
    children: (
      <p className="flex flex-col gap-4">
        <div>Để đăng ký thuê xe, bạn chỉ cần thẻ tín dụng hoặc ghi nợ.</div>
        <div className="mt-4">Khi tại quầy cho thuê, bạn sẽ cần:</div>
        <ul>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>Hộ chiếu</span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>Voucher</span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>Bằng lái xe của từng người lái xe</span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>
              Thẻ tín dụng của người lái xe chính (một số công ty cho thuê cũng
              chấp nhận thẻ ghi nợ, nhưng hầu hết sẽ không).
            </span>
          </li>
        </ul>
        <div>
          Quan trọng: Hãy bảo đảm bạn cũng kiểm tra các điều khoản thuê xe, vì
          mỗi công ty cho thuê xe sẽ có những điều lệ riêng. Ví dụ: Họ có thể
          cần xem giấy tờ tùy thân bổ sung. Họ có thể không chấp nhận một số
          loại thẻ tín dụng nhất định. Hoặc họ có thể không cho thuê nếu người
          lái có bằng lái chưa đủ 36 tháng.
        </div>
      </p>
    ),
  },
  {
    key: "3",
    label: "Tôi có đủ tuổi để thuê xe?",
    children: (
      <p className="flex flex-col gap-4">
        Hầu hết các công ty sẽ cho bạn thuê xe nếu bạn từ 21 tuổi trở lên (và
        một số sẽ cho người lái nhỏ tuổi hơn thuê). Nhưng nếu bạn dưới 25 tuổi,
        bạn vẫn có thể phải trả "phụ phí tài xế trẻ".
      </p>
    ),
  },
];

const itemsRight: CollapseProps["items"] = [
  {
    key: "4",
    label:
      "Tôi có thể đặt xe cho bạn đời, bạn bè, đồng nghiệp, v.v. của mình không?",
    children: (
      <p className="flex flex-col gap-4">
        Dĩ nhiên. Chỉ cần điền các thông tin về họ trong biểu mẫu "Chi tiết tài
        xế" khi bạn đặt xe.
      </p>
    ),
  },
  {
    key: "5",
    label: "Tôi cần xem xét những gì khi lựa chọn một chiếc xe?",
    children: (
      <p className="flex flex-col gap-4">
        <ul>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>
              Xem xét về nơi bạn sắp đi. Xe SUV có thể là lựa chọn tuyệt vời khi
              chạy bon bon trên đường cao tốc ở Texas, nhưng xe nhỏ hơn có thể
              sẽ là lựa chọn hợp lý hơn khi lái ở Rome.
            </span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>
              Xem người khác nói gì. Bạn sẽ tìm thấy rất nhiều đánh giá và điểm
              đánh giá trên trang web chúng tôi. Vì thế hãy tìm hiểu xem những
              khách hàng khác thích (và không thích) gì về từng công ty cho
              thuê.
            </span>
          </li>
          <li>
            <span className="text-4xl mr-1 leading-5">.</span>
            <span>
              Đừng quên xem xét hộp số. Trong một số quốc gia, hầu như ai cũng
              lái xe số sàn. Ở các nước khác, xe số tự động lại là tiêu chuẩn.
              Hãy chắc chắn bạn sẽ thuê chiếc xe bạn có thể lái!
            </span>
          </li>
        </ul>
      </p>
    ),
  },
  {
    key: "6",
    label: "Tất cả các loại phí có được bao gồm trong giá thuê xe không?",
    children: (
      <p className="flex flex-col gap-4">
        <div>
          Giá bạn thấy bao gồm xe, bảo hiểm bắt buộc (ví dụ: Bảo hiểm chống trộm
          cắp, Bảo hiểm hư hại do va chạm) và các loại phí, nếu có, thường được
          thanh toán khi nhận xe (ví dụ: phí một chiều, phụ phí sân bay hoặc
          thuế địa phương).
        </div>
        <div>
          Giá cũng bao gồm bất kỳ dịch vụ bổ sung nào bạn đã thêm (ví dụ: thiết
          bị GPS hoặc ghế trẻ em).
        </div>
        <div>
          Giá không bao gồm bất kỳ bảo hiểm bổ sung nào bạn mua khi đến quầy cho
          thuê.
        </div>
        <div>Mách nhỏ: Có chi tiết giá đầy đủ ở trang Thanh toán.</div>
        <div>Đăng chỗ nghỉ của Quý vị</div>
      </p>
    ),
  },
];

function ExpandQuestion() {
  return (
    <>
      <ItemsHead title="Các câu hỏi thường gặp" />
      <div className="flex gap-5">
        <div className="basis-1/2">
          <Collapse
            expandIconPosition="end"
            items={itemsLeft}
            className="custom-expand-question"
          />
        </div>
        <div className="basis-1/2">
          <Collapse
            expandIconPosition="end"
            items={itemsRight}
            className="custom-expand-question"
          />
        </div>
      </div>
    </>
  );
}

export default ExpandQuestion;
