import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"; //如果想要拆分CSS文件，在需要的组件中载入,这样只有使用这个组件的时候才会载入

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//组件命名必须大写开头
export default function Header() {
  const title = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>Lu YI React Example</h1>
      <p>
        {title} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
