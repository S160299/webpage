import React from 'react';
import 'antd/dist/reset.css';
import { Layout,Table,Rate } from 'antd';


const { Footer, Content } = Layout;


export default function Order() {

  const dataSource = [
    {
      key: '1',
      name: 'Naresh Bobbili',
      mobile: '+91 XXXXXXXXXX',
      productid: "32",
      price: '245$',
      address: '10 Downing Street',
      
      rating: <Rate defaultValue={3}></Rate>,
    },
    {
      key: '2',
      name: 'Teja Kiran Bobbili',
      mobile: '+91 XXXXXXXXXX',
      productid: "42",
      price: '345$',
      address: '10 Downing Street',
      rating: <Rate defaultValue={2}></Rate>,
    },
    {
      key: '3',
      name: 'Tomhiddleston',
      mobile: '+91 XXXXXXXXXX',
      productid: "32",
      price: '675$',
      address: '10 Downing Street',
      rating: <Rate defaultValue={3}></Rate>,
    },
    {
      key: '4',
      name: 'kane williamson',
      mobile: '+91 XXXXXXXXXX',
      productid: "42",
      price: '895$',
      address: '10 Downing Street',
      rating: <Rate defaultValue={4}></Rate>,
    },
    {
      key: '5',
      name: 'robert downy.Jr',
      mobile: '+91 XXXXXXXXXX',
      productid: "32",
      price: '547$',
      address: '10 Downing Street',
      rating: <Rate defaultValue={2}></Rate>,
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Contact',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Productid',
      dataIndex: 'productid',
      key: 'productid',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];
    return (
      <div>
      <center>
      <Layout>
      <Content><br></br><br></br>
        <center>
          <h1><b>Custmor Details</b></h1><br></br><br></br>
          <b>There are lot of custmors who are satisified in the 'Sales' website, after seeing the Products availability, Rates of the Products, and also with delivery experience.
            these are the details of our custmors with their valuable feedback and suggestions</b><br></br><br></br><br></br>
          <div>
            <Table dataSource={dataSource} columns={columns}></Table>
          </div>
        </center>
      </Content>
      <Footer></Footer>
      </Layout>
      </center>
    </div>
    )
  }