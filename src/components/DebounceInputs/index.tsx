import { useEffect, useState } from "react";
import styles from "./debounceInputs.module.css";

const DeabounceInputs = () => {
  const [input, setInput] = useState<string>("");
  const [debouncedInput, setDebouncedInput] = useState<string>("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInput(input);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <main className={styles.main_container}>
      <div className={styles.button_container}>
        <div className={styles.input_group}>
          <span>Main Input</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className={styles.input_group}>
          <span>Debounced Input</span>
          <input type="text" value={debouncedInput} />
        </div>
      </div>
    </main>
  );
};

export default DeabounceInputs;
