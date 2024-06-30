export default function Tabs({ children, buttons, ButtonsContainer }) {
  // 如果上面的解构参数是小写的buttonsContainer,则必须const转化一下
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
