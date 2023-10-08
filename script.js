fetch("http://localhost:8080/saveStudent").then((data)=>{
    // console.log(data); ///json format
    return data.json(); ///converted to object
}).then((objectData)=>{          ///objectdata ekhane store hbe
    console.log(objectData[0].title); ///console e datagula dekha jabe..
    let tableData="";
    objectData.map((values)=>{ ///values e api er datagula
        tableData+=`<tr>
        <td>${values.id}</td>
        <td>${values.Name}</td>
        <td>${values.Address}</td>
        <td><${values.MobileNo}"/></td>
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;///html er shthe connection
}).catch((err)=>{
    console.log(err);
})