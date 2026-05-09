import "./App.css";

function App() {
  return (
    <div className="app">
      <p className="intro">
        Hệ thống hỗ trợ giáo viên trung học phổ thông bằng trí tuệ nhân tạo.
      </p>

      <div className="tools">
        <button className="tool active">
          <div className="tool-name">📘 Soạn giáo án</div>
          <div className="tool-desc">
            Tạo giáo án theo chuẩn Bộ GD&ĐT
          </div>
        </button>

        <button className="tool">
          <div className="tool-name">📝 Tạo đề kiểm tra</div>
          <div className="tool-desc">
            Sinh đề trắc nghiệm & tự luận
          </div>
        </button>

        <button className="tool">
          <div className="tool-name">🤖 Giải thích bài học</div>
          <div className="tool-desc">
            Hỗ trợ trình bày nội dung dễ hiểu
          </div>
        </button>

        <button className="tool">
          <div className="tool-name">📊 Chấm điểm tự động</div>
          <div className="tool-desc">
            Đánh giá và nhận xét học sinh
          </div>
        </button>

        <button className="tool">
          <div className="tool-name">💡 Gợi ý bài tập</div>
          <div className="tool-desc">
            Tạo bài tập theo mức độ
          </div>
        </button>

        <button className="tool">
          <div className="tool-name">📚 Trợ lý giáo viên</div>
          <div className="tool-desc">
            Hỗ trợ hỏi đáp chuyên môn
          </div>
        </button>
      </div>

      <textarea placeholder="Nhập yêu cầu của giáo viên..." />

      <div className="btns">
        <button className="run">▶ Chạy AI</button>
      </div>

      <div id="output">
        AI sẽ hỗ trợ giáo viên tạo giáo án, đề thi, bài tập và chấm điểm học sinh tự động.
      </div>
    </div>
  );
}

export default App;