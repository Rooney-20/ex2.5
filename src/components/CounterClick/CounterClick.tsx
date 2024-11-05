import { useState } from "react";

interface ClickCounterProps {
  title: string;
  messageOn10Clicks?: string;
  messageonMouseOver?: string;
}

const ClickCounter = ({
  title,
  messageOn10Clicks,
  messageonMouseOver,
}: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card">
      <h4>{title}</h4>
      {isHovered ? <p>{messageonMouseOver}</p> : null}
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        count is {count}
      </button>
      {count >= 10 ? <p>{messageOn10Clicks}</p> : null}
    </div>
  );
};

export default ClickCounter;