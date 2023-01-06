export default function Header({headerData}){
    return(
        <header className="container-fluid ">
        <div className="header container  d-flex align-items-center justify-content-between">
          <div className="Logo d-flex gap-1">
            <span className="fs-2">{headerData.icon}</span>
            <a href="#" className="text-decoration-none text-dark fw-bold fs-2">{headerData.title}</a>
          </div>
          <div className="nav d-flex gap-3">
          <ul className="list-unstyled d-flex gap-3 pt-3">
            {headerData.nav.map((e)=>{
                return(
                  <li><a href="#" className="text-decoration-none text-dark">{e}</a></li>
                )
            })}
                </ul>
                <button type="button" className="border-dark rounded-pill bg-dark text-light ">{headerData.btn}</button>
          </div>
        </div>
        </header>
    )
}