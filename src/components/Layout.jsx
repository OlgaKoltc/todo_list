import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="header">
        <h1>Todos</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/completed">Completed</NavLink>
        </div>
      </footer>
    </>
  );
};

export { Layout };
