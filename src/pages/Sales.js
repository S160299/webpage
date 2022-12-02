import React from 'react';
import 'antd/dist/reset.css';
import { Layout } from 'antd';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
  } from 'chart.js';
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


const { Footer, Content } = Layout;

const data = {
  labels: ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [{
    data: [8,7.8,9,10,7,6.8,8.2,6.8,9,6.9,8.7,7.8],
    backgroundColor: 'transparent',
    borderColor: '#f26c6d',
    pointBorderColor: 'transparent',
    pointBorderWidth: 4,
    tension:0.5
  }]
};
const options = {
  plugins: {
    legend: false
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y:{
      min: 2,
      max: 10,
      ticks: {
        stepSize: 2,
        callback: (value) => value + 'k'
      },
      grid: {
        borderDash: [10]
      }
    }
  }
};

export default function Sales() {
  return (
    <div>
      <center>
      <Layout>
      <Content><br></br><br></br>
      <b>In the Year 2022, most of the electronic category products were pruchased like nowhere esle in the 'Sales' website, it is observed that custmors are mainly focusing on gadgets and clothing only this sales graph shows that the data about all categories and annual plans</b><br></br><br></br>
        <h3>Products monthly sales details in the year 2022</h3>
        <br></br><br></br>
        <div>
        <Line data={data} options={options}></Line>
        <br></br>
        <h3>Annual Sale data</h3>
        </div>
      </Content>
      <Footer></Footer>
      </Layout>
      </center>
    </div>
  )
}