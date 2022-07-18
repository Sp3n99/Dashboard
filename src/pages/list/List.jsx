import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AccountsDatatable from "../../components/datatable/AccountsDatatable"


const List = ({ type }) => {



  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AccountsDatatable type={type} />
      </div>
    </div>
  )
}

export default List