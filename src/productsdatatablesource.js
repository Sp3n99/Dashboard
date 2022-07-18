export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field:"title",
      headerName: "Product",
      width: 150,
    },
    {
      field: "inventory",
      headerName: "Inventory",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width:250,
    },
    {
      field: "profit",
      headerName: "Profit",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  