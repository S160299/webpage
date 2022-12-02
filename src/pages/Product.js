import React,{Component} from 'react';
import 'antd/dist/reset.css';
import { Layout,Table } from 'antd';
import '../App.css';

const { Footer, Content } = Layout;


class Product extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[],
    };
  }
  componentDidMount()
  {
    fetch('https://fakestoreapi.com/products').then(
      (response => response.json())
    ).then(json =>this.setState({
      data:json
    }));
  }
  render() {
        const columns = [
          {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
          },
          {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render:(text, data) => {
              return(
                <div>
                  <img src={data.image} alt="#"/>
                </div>
              )
            }
          }

        ]
    return (
      <div>
        <center>
        <Layout>
        <Content>
          <Table dataSource={this.state.data} columns={columns}></Table>
        </Content>
        <Footer>Footer</Footer>
        </Layout>
        </center>
      </div>
    )
  }
}

export default Product
