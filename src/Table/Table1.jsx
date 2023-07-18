import React from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';

const Table1 = () => {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await axios.get('http://192.168.1.55:3000/fetchData');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getStudents();
  }, []);

  const columns = [
    {
      name: 'Batch_Name',
      selector: (row) => row.Batch_Name,
      sortable: true,
    },
    {
      name: 'Apti_Instructor',
      selector: (row) => row.Apti_Instructor,
      sortable: true,
    },
    {
      name: 'PD_Instructor',
      selector: (row) => row.PD_Instructor,
      sortable: true,
    },
    {
      name: 'Tech_Instructor',
      selector: (row) => row.Tech_Instructor,
      sortable: true,
    },
    {
      name: 'Starting_Date',
      selector: (row) => row.Starting_Date,
      sortable: true,
    },
    {
        name: 'Tech_Test_share',
        selector: (row) => row.Tech_Test_share,
        sortable: true,
      },
  ];

  return (
    <div className="table container">
      <h1 style={{textAlign:'center'}}>Student's Report</h1>
      <DataTable
        columns={columns}
        data={students}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default Table1;
