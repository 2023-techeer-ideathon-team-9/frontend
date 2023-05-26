import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";

type Props = {
  word: string;
};
//{ word }: Props
export default function ListPage() {
  const [content, SetContent] = useState([]);
  const a = ["a", "b", "b", "b", "b", "b", "b"];
  useEffect(() => {
    async function get() {
      const result = await axios.get(
        ` hhtp//localhost:5000/api/v1/resume/search?word=${word}`
      );
    }
    get();
    return;
  }, []);
  {
    content.forEach((text) => {
      return <div>{text}</div>;
    });
  }
  function List() {
    content.forEach((text) => {
      return <div>{text}</div>;
    });
  }
  return (
    <div className={styles.container}>
      {content.map((text, index) => (
        <div key={index}>{text}</div>
      ))}
    </div>
  );
}
