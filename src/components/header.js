export default function Header({ headerData, styleObj, style1Obj, modal }) {
  return (
    <header className="container-fluid " style={styleObj}>
      <div className="header container  d-flex align-items-center justify-content-between">
        <div className="Logo d-flex gap-1">
          <span className="fs-2">{headerData.icon}</span>
          <a href="#" className="text-decoration-none text-dark fw-bold fs-2">
            {headerData.title}
          </a>
        </div>
        <div className="nav d-flex gap-3">
          <ul className="list-unstyled d-flex gap-3 pt-3">
            {headerData.nav.map((e) => {
              return (
                <li>
                  <a href="" className="text-decoration-none text-dark">
                    {e}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#stat"
            className="border border-none rounded-pill text-light "
            style={style1Obj}
            onClick={modal}
          >
            {headerData.btn}
          </button>
        </div>
      </div>
    </header>
  );
}
