import Header from "../sections/Header";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <h3 className="page__body">
        Bienvenido al componente {`<PrivateRoute/>`}
      </h3>
    </div>
  );
}
