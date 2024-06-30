import { useState } from "react"; // useState 就是 react Hooks
import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton";
import Section from "./Sections";
import Tabs from "../components/Tabs";

export default function Examples() {
  //selectedTopic为当前值，setSelectedTopic为更新功能
  //能用const是因为每次调用是都是重新创建，所以不用变量
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = selectedTopic ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <Section id="examples" title="Tabs Example" className="">
      <Tabs
        // 此处设定组件里的元素标签，此处用的是string是因为menu是html内置标签
        // 如果是自定义的组件名，则需要用{},比如 ButtonsContainer={Section}
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={function () {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            {/* 箭头函数更简短 */}
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
