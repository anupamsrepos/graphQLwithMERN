import logo from './assets/logo.png';

export default function header() {
  return (
    <div className='navbar bg-light mb-4 p-0'>
        <div className="container">
            <a href="/" className="navbar-brand">
                <div className="d-flex">
                    <img src={logo} alt="logo" className='logo' />
                    <div className='title'>ProjectMgmt</div>
                </div>
            </a>
        </div>
    </div>
  )
}
