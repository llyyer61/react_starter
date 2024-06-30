import { CORE_CONCEPTS } from "../data"; // 如果不是对象文件里的default export,就要使用花括号{}
import CoreConcept from "../components/CoreConcept";
import Section from "./Sections";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          /* 因为CoreConcept的props与data.js里的key匹配，
          所以可以使用...将data.js里对应的key+values全部输出出来 */
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
