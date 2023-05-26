import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  word: string;
};
//{ word }: Props
export default function ListPage({ word }: Props) {
  const [contents, SetContent] = useState<any>([]);
  const questions = [
    "Q. 하나금융TI에 지원한 구체적인 지원동기와 입사 후 목표를 기술해 주십시오.",
    "Q. 지원동기 및 입사 후 목표에 대해 기재해주세요.",
    "Q. 지원동기 및 포부 (최소 100자, 최대 420자 입력가능)",
  ];
  const content = [
    "A. 하나금융TI의 비전에 매료되어 지원하게 되었습니다. 하나금융TI는 국내 금융권 최초 그룹 공동 오픈 API 플랫폼 구축, '워라봇' 출시 등 비즈니스 중심의 혁신을 이어갔다. 이 부분이 저에게는 큰 매력으로 다가왔습니다. 금융 IT 시장에서 독자적인 IT 사업화는 IT 분야의 지속적인 투자와 혁신으로 저에게 다가왔고, 저는 이 혁신의 구성원이 되기 위해 지원했습니다.",
    "A. E-commerce 시장이 점점 더 성장하는 가운데 패션과 뷰티에서 부각을 나타내는 F&F에서 고객들에게 서비스를 제공하는 개발자로 입사하고 싶습니다. 저는 기업에게 가장 중요한 요소는 도전적인 정신과 성장성 있는 방향이라고 생 각합니다. F&F는 Discovery 와 MLB 같은 이미 유명한 패션 브랜드뿐만 아니라 Banila co와 stretch angels 같은 자체 브랜드도 론칭하여 성장시키는 도전적인 기업이며 패 션 트렌드를 창조하는 기업이라고 생각하였습니다. 이런 F&F에서 고객들에게 제공하는 다양한 F&F의 디지털 서비스를 보다 간편하 게 사용할 수 있는 서비스를 개발하고 론칭하기 위해 이번 백 엔드 인턴 채용에 지원하게 되었습니다. 현재 쇼핑은 매장에서 웹사이트로 웹사이트에서 모바일로 고객들의 수요가 옮겨 지고 있다고 생각합니다. 제가 F&F에 입사한다면 위 같은 상황에서 다양한 E-commerce 서비스를 개발하 고 싶습니다. 현재 Discovery 나 MLB 등의 브랜드는 이미 자체 앱이 있지만 저는 F&F의 모든 브랜드를 통합해서 서비스를 제공하는 애플리케이션이나 웹사이트 를 만들어서 고객들에게 제공하고 싶습니다. 이처럼 한 번에 보여준다면 좀 더 자체 브랜드의 홍보효과 역시 있을 것이라 생각하고 더 다양한 이벤트를 고객들 에게 제공해 브랜드 가치 상승 및 매출 증가로 이어질 수 있다고 생각합니다. 위 같은 이유로 패션 트렌트를 창조하는 F&F에서 백 엔드 개발자로 도전적인 정 신으로 고객들에게 혁신적인 서비스를 제공하는 개발자가 되고 싶습니다.",
    "A. [미래를 향하여] 미래에 개발자가 되고 싶은 사람들에게 더 질 좋은 문제와 서비스를 제공하기 위해 이번 현대 지엔비 정규직 채용에 지원하였습니다. 저는 기업에게 있어 가장 중요한 부분은 성장성과 도전적인 정신이라고 생각합니다. 최근 개발자의 수요가 증가하고 처우가 좋아짐에 따라 개발자를 희망하는 사람들도 같이 증가하고 있습니다. 이 같은 상황에서 Sw 엔지니어의 역량 향상과 소통을 지원하는 Softeer는 좋은 성장성을 지니고 있다고 생각합니다. 또한 자동차 위주의 엔지니어링 회사가 다양한 개발자들을 위한 서비스를 제공하는 것이야말로 도전적이고 4차 산업혁명 시대에 필요한 기업이라고 생각합니다. 이런 이유로 현대 지엔비에 입사하여 더 나은 세상을 만들 개발자들에게 좀 더 효율적이고 질 좋은 교육 서비스를 제공하고 싶습니다.",
  ];
  // const b = [
  //   { content: "a", title: "v" },
  //   { content: "a", title: "v" },
  //   { content: "a", title: "v" },
  // ];
  const location = useLocation();
  const movePage = useNavigate();
  console.log(location.state);
  useEffect(() => {
    axios
      .post(` http://localhost:5000/api/v1/resume/search_keyword`, {
        keyword: location.state,
      })
      .then((res) => {
        SetContent(res);
      });
  }, []);
  function onClick() {
    setTimeout(() => {
      movePage("/result", {
        state: { company_name: "우리은행", content: contents[0].content },
      });
    }, 500);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.q}>
          {questions.map((text: any, index: any) => (
            <div className={styles.qDetail} key={index}>
              {text}
            </div>
          ))}
        </div>
        <div className={styles.c}>
          {content.map((text: any, index: any) => (
            <div className={styles.cDetail} key={index}>
              {text}
            </div>
          ))}
        </div>
      </div>
      <button onClick={onClick}>우리은행</button>
    </>
  );
}
