import "./accountsDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../accountsdatatablesource";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { productColumns } from "../../productsdatatablesource";

const AccountsDatatable = ({ type }) => {

  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);


  useEffect(()=>{
  {/*
      const fetchData = async () => {
        let list = [];
        try{
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()});
          });
          setData(list);
        } catch(err){
          console.log(err);
        }
      };
      fetchData();
    */}

    switch(type){
      case "users":
        setTable(userColumns);
        break;
      case "products":
        setTable(productColumns);
        break;
      default:
        break;
    }

      const unsub = onSnapshot(collection(db, type), (snapShot) => {
        let list=[];
        snapShot.docs.forEach(doc=>{
          list.push({id:doc.id, ...doc.data() });
        })
        setData(list);
      }, (error) => {
        console.log(error);
      });

      return () => {
        unsub();
      }
  }, [type]);

  const handleDelete = async (id) => {
    try{  
      await deleteDoc(doc(db, type, id));
      setData(data.filter((item)=>item.id !== id))
    }catch(err){
      console.log(err);
    }
  };

    const actionColumn = [
        {field: "action", headerName: "Action", width: 200, renderCell:(params)=>{
            return(
                <div className="cellAction">
                  <Link to={`/${type}/1`} style={{textDecoration: 'none'}}>
                    <div className="viewButton">View</div>
                  </Link>
                    <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                </div>
            )
    }}];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to={`/${type}/new`} className="link">
          Add New
        </Link>
      </div>
        <DataGrid 
        className="datagrid"
        rows={data}
        columns={table.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}


export default AccountsDatatable