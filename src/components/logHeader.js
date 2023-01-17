export default function LogHeader({ logData }) {
  return (
    <div className="container-fluid bg-white d-flex justify-content-between border border-bottom py-2">
      <div className="d-flex">
        <div className="fs-1">{logData.icon}</div>
        <div className="input-group border rounded-pill border-light  bg-light gap-3 d-flex px-3 ms-3 ">
          <button className="border border-light rounded-pill bg-light">
            <i class="bi bi-search"></i>
          </button>
          <input
            type="text"
            placeholder="Search Medium"
            className="border border-light bg-light "
          />
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <div className="d-flex align-items-center pe-3">
          <button className="fs-3 border border-white text-secondary bg-white">
            <i class="bi bi-pencil-square"></i>
          </button>
          <span className="text-secondary">Write</span>
        </div>
        <button className="fs-3 border border-white text-secondary  bg-white">
          <i class="bi bi-bell"></i>
        </button>
        <img
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
          alt=""
          width={50}
        />
      </div>
    </div>
  );
}
