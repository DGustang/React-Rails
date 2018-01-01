class HistoryTransaction extends React.Component {
    render() {
        return(
            <div className="panel panel-flat">
                <div className="panel-heading">
                    <h5 className="panel-title">Panel history transaction</h5>
                    <div className="heading-elements">
                        <ul className="icons-list">
                            <li><a data-action="collapse"></a></li>
                            <li><a data-action="close"></a></li>
                        </ul>
                    </div>
                </div>

                <div className="panel-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>No Transaction</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>0899898990</td>
                                <td>Flight</td>
                                <td>12/09/2018</td>
                                <td>Rp300,000</td>
                                <td>
                                    <label className="label label-danger">Expired</label>
                                </td>
                                <td>
                                    <a href="" className="btn btn-block btn-sm btn-primary">view</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}