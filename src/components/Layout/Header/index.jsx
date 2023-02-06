const Header = () => {
  return (
    <header>
      <i
        className="bx bx-menu"
        id="header-toggle"
        onClick={() => {
          props.setToggle((prevState) => !prevState);
        }}
      />
    </header>
  );
};
