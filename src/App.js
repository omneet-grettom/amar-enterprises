import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import logo from './logo.png';
import { Card, Input, Space } from 'antd';
const { Search } = Input;
const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
    <div className='container'>
    
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <img src={logo} alt="Logo" className='logo' style={{backgroundColor:"white", width:"191px"}}/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Space direction="vertical">
        <Search
          placeholder="input search text"
          // onSearch={onSearch}
          style={{
            width: 200,
          }}
          />
          </Space>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <div>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://hips.hearstapps.com/hmg-prod/images/2025-toyota-gr-supra-102-668c519da0fe1.jpg?crop=0.638xw:0.538xh;0.152xw,0.178xh&resize=1200:*" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          </Content>
          </div>
          <div>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://thumbs.dreamstime.com/z/jaguar-xj-white-colour-driving-city-street-high-speed-moscow-russia-october-231808315.jpg?ct=jpeg" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          </Content>
          </div>
          <div>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/148477/thar-right-front-three-quarter-5.jpeg?isig=0&q=80" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          </Content>
          </div><br/>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
    </div>
    </>
  );
};
export default App;
