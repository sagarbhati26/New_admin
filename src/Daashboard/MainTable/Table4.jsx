import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import * as XLSX from 'xlsx';

const Table4 = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.55:3000/fetchData');
        setStudents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelBuffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const excelUrl = URL.createObjectURL(excelData);
    const link = document.createElement('a');
    link.href = excelUrl;
    link.download = 'students.xlsx';
    link.click();
    URL.revokeObjectURL(excelUrl);
  };

  const columns = [
    {
      name: 'Batch Name',
      selector: (row) => row.Batch_Name,
      sortable: true,
    },
    {
      name: 'Apti Instructor',
      selector: (row) => row.Apti_Instructor,
      sortable: true,
    },
    {
      name: 'PD Instructor',
      selector: (row) => row.PD_Instructor,
      sortable: true,
    },
    {
      name: 'Tech Instructor',
      selector: (row) => row.Tech_Instructor,
      sortable: true,
    },
    {
      name: 'Starting Date',
      selector: (row) => row.Starting_Date,
      sortable: true,
    },
    {
      name: 'Tech_Test_share',
      selector: (row) => row.Tech_Test_share,
      sortable: true,
    },
    {
      name: 'Apti Test share',
      selector: (row) => row.Apti_Test_share,
      sortable: true,
    },
    {
      name: 'PD Test share',
      selector: (row) => row.PD_Test_share,
      sortable: true,
    },
    {
      name: 'Course',
      selector: (row) => row.Course,
      sortable: true,
    },
  ];

  return (
    <div className="table container">
      <h1 style={{ textAlign: 'center' }}>Total Batch</h1>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        <button type='button' className='btn btn-success' onClick={handleDownload} style={{ marginRight: '1rem' }}>
          Download
        </button>
      </div>
      <DataTable columns={columns} data={students} pagination highlightOnHover striped />
    </div>
  );
};

export default Table4;
