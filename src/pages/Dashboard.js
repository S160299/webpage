import React from 'react';
import 'antd/dist/reset.css';
import { Layout } from 'antd';
import { Bar } from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js';
Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)


const { Footer, Content } = Layout;

const labels = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec'];

const options = {
  plugins:{
    legend:{
      position: 'top'
    },
    title:{
      display:true,
      text: 'Year wise Sales'
    }
  }
}

const data = {
  labels,
  datasets : [
    {
      label: '2020 sales',
      data: [1000,2000,3000,4000,5000,6000,7000,7000,9000,1500,2500,3500],
      backgroundColor: 'brown'
    },
    {
      label: '2021 sales',
      data: [4500,5500,6500,7500,8500,9500,1800,2800,3800,4800,5800,6800],
      backgroundColor: 'black'
    },
    {
      label: '2022 sales',
      data: [7800,8800,9800,7000,9000,2000,4000,6000,8000,1500,5500,5000],
      backgroundColor: 'pink'
    },
  ]
}

export default function Dashboard() {
  return (
    <center>
    <Layout>
    <Content>
      <br></br>
      <h1>Sales Data</h1><br></br>
      <b>This data is related to the sales which are happening in 'Sales website, which is popular and trendy mostly attracted by the younger gernrations,
        <br></br>
        It consists all categories products so you can take a look on the Sales site.It provides all kinds of offers on EMI's, Debit and Credit cards and even they are are also providing coupons also, so that everyone can get all the products in their budget. 
      </b><br></br><br></br>
    <div>
     <Bar options={options} data={data}></Bar>
     </div>
    </Content>
    <Footer>Footer</Footer>
    </Layout>
    </center>
  )
}