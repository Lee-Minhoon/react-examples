import "./App.css";
import Slider from "./components/Slider";

const DUMMY_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/ko/thumb/2/2b/2020%EB%8F%84%EC%BF%84%EC%98%AC%EB%A6%BC%ED%94%BD_%EB%B0%B0%EB%93%9C%EB%AF%BC%ED%84%B4.svg/1200px-2020%EB%8F%84%EC%BF%84%EC%98%AC%EB%A6%BC%ED%94%BD_%EB%B0%B0%EB%93%9C%EB%AF%BC%ED%84%B4.svg.png",
  "https://i.namu.wiki/i/_YTjVCq-yP7_w9T2BCq_3LIcgii2vW3AqGSKhIZcG6sIU5PJIH9AvrVwpysjnOv1OaWoX51ap0kNCImEVqKRwQ.webp",
  "https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/f1kq6fjdpov9ztlmupg8",
];

function App() {
  return (
    <Slider
      images={DUMMY_IMAGES}
      onSlide={(idx) => {
        console.log(idx);
      }}
    />
  );
}

export default App;
