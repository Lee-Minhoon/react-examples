import { useEffect, useRef, useState } from "react";

const Slider = ({ images, onSlide }) => {
  const ref = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [shouldRecover, setShouldRecover] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const items = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    if (currentIdx === items.length - 1) {
      const inter = setInterval(() => {
        ref.current.style.transition = "none";
        setCurrentIdx(1);
        setShouldRecover(true);
      }, 500);
      return () => clearInterval(inter);
    }
    if (currentIdx === 0) {
      const inter = setInterval(() => {
        ref.current.style.transition = "none";
        setCurrentIdx(items.length - 2);
        setShouldRecover(true);
      }, 500);
      return () => clearInterval(inter);
    }
  }, [currentIdx, items.length]);

  useEffect(() => {
    if (!shouldRecover) return;
    const inter = setInterval(() => {
      ref.current.style.transition = "left 0.5s";
      setShouldRecover(false);
      setDisabled(false);
    }, 100);
    return () => clearInterval(inter);
  }, [shouldRecover]);

  useEffect(() => {
    if (!disabled) return;
    const inter = setInterval(() => {
      setDisabled(false);
    }, 500);
    return () => clearInterval(inter);
  }, [disabled]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <button
        onClick={() => {
          const prevIdx = (currentIdx + items.length - 1) % items.length;
          setCurrentIdx(prevIdx);
          onSlide(prevIdx);
          setDisabled(true);
        }}
        disabled={disabled}
      >
        prev
      </button>
      <div
        style={{
          position: "relative",
          width: 500,
          height: 500,
          overflow: "hidden",
        }}
      >
        <div
          ref={ref}
          style={{
            position: "absolute",
            display: "flex",
            top: 0,
            left: `${-currentIdx * 500}px`,
            transition: "left 0.5s",
          }}
        >
          {items.map((image, idx) => {
            return <ImageContainer key={idx} image={image} />;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          const nextIdx = (currentIdx + 1) % items.length;
          setCurrentIdx(nextIdx);
          onSlide(nextIdx);
          setDisabled(true);
        }}
        disabled={disabled}
      >
        next
      </button>
    </div>
  );
};

const ImageContainer = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        width={500}
        height={500}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Slider;
