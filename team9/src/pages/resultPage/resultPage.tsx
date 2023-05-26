import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { useLocation } from "react-router-dom";

type Props = {
  company_name: string;
  content: string;
};

export default function ResultPage({ company_name, content }: Props) {
  //localhost:5000/api/v1/chatgpt/getresult/
  const [text, setText] = useState<any>({
    company_name: "",
    content: "",
  });
  const bank = "우리은행";
  const contents =
    "우리은행이 추구하는 이상과 가치에 매료되어 지원하게 되었습니다. 우리은행은 금융산업의 혁신을 위해 지속적으로 노력해 왔습니다. 최첨단 기술 활용, IT 발전에 대한 투자, 디지털 혁신 추진에 대한 그들의 헌신은 저에게 깊은 공감을 불러일으킵니다. 저는 특히 고객 중심 솔루션에 대한 우리은행의 강조와 고객의 진화하는 요구에 적응하는 능력에 끌렸습니다. 우리은행에 합류함으로써 저는 우리은행의 지속적인 혁신 노력에 기여하고 금융 부문에서 우리은행의 변혁 여정의 일부가 되고 싶습니다.";
  const location = useLocation();
  console.log("a" + location.state.content);
  console.log(company_name);
  console.log(content);

  // useEffect(() => {
  //   axios
  //     .post(`http://localhost:5000/api/v1/chatgpt/getresult/`, {
  //       company_name: location.state.company_name,
  //       content: location.state.content,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       setText(response);
  //     });
  //   return;
  // }, []);
  return (
    <>
      <div className={styles.bank}>
        <div>{bank}</div>
        <div>{contents}</div>
      </div>
    </>
  );
}
