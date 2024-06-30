//...props可以将元素使用的id,className,onClick 等等参数全部拿过来
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
