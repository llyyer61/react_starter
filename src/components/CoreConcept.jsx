//制作可重复使用组件
//从引用这个的元素中的参数里获取数据并渲染到组件里
//function CoreConcept(props) { 原来的样子使用props ,用{}结构函数，更方便
export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      {/* <h3>{props.title}</h3> */}
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
