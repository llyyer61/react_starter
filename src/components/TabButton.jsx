//...props可以将元素使用的id,className,onClick 等等参数全部拿过来
export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      {/* children属性指的是引用组件时中间的任何内容，可以是文本也可以是元素 */}
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
