const ReportTable = ({ hours, reports }) => {

    if (reports.length === 0) {
      return <h2 className=" font-bold  flex content-box flex-col justify-items-center ml-64 mt-6">No Cookie Stands Available</h2>;
    }
    const totalsPerStand = reports.map((report) =>
    report.hourly_sales.reduce((acc, sales) => acc + sales, 0)
  );  
  const totalsPerHour = hours.map((hour, index) =>
  reports.reduce((acc, report) => acc + report.hourly_sales[index], 0)
  );
   const totalAllStands = totalsPerStand.reduce((acc, total) => acc + total, 0);
    const grandTotal = totalsPerHour.reduce((acc, total) => acc + total, 0);
  
  
  return (
    <div className="w-4/6 rounded-lg  bg-emerald-300 flex content-box flex-col justify-items-center ml-64 mt-6">
      <table className=" rounded-lg">
        <thead className=" bg-emerald-600 border-2 border-black">
          <tr className="border-2 border-black">
            <th>Location</th>
            {hours.map((hour, index) => (
              <th key={index} className="border-2 border-black">{hour}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody >
          {reports.map((report, index) => (
            <tr key={index} className={index % 2 ? "bg-emerald-400" : "bg-emerald-300"}>
              <td className="border-2 border-black">{report.Loc}</td>
              {report.hourly_sales.map((sales, index) => (
                <td key={index} className="border-2 border-black">{sales} </td>
              ))}
              <td className="border-2 border-black">{totalsPerStand[index]}</td>
            </tr>
          ))}
          <tr className="bg-emerald-600 border-2 border-black">
            <td className="border-2 border-black">Total</td>
            {totalsPerHour.map((total, index) => (
              <td key={index} className="border-2 border-black">{total}</td>
            ))}
            <td className="border-2 border-black">{totalAllStands}</td>
          </tr>
        </tbody>
      </table>
    
    </div>
  );
  };
  
  export default ReportTable;