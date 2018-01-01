class Navbar extends React.Component {
    render() {
        return (
            <div className="ide-navbar">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#">
                            <img src="https://d1s5saizp11buw.cloudfront.net/airy-web/icon/airy-logo-bl.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" classID="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Tiket Pesawat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hotel</a>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Cek Pesanan</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" classID="navbarDropdown" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Butuh Bantuan ?
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}