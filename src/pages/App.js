import { Card, Gap, StyledLink } from "../components";
import { Layout } from "antd";
import "./App.scss";
import Wahid from "../assets/wahid.jpeg";
import Panjoel from "../assets/panjoel.jpeg";

const { Header, Content, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

function App() {
  return (
    <Layout className="main-page">
      <Header className="navbar">
        <p className="title">Kelompok 23</p>
        <div className="link-wrapper">
          <StyledLink label="Home" href="#" />
          <Gap width={20} />
          <StyledLink label="Product" href="#" />
        </div>
      </Header>
      <Content className="content">
        <Card nama="Wahid Dwipa Baskara" nim="21120117130042" photo={Wahid} />
        <Card nama="Irvan Rifqi S." nim="21120117130064" photo={Panjoel} />
      </Content>
      <Footer style={{ textAlign: "center", color: "#28abb9" }}>
        @{year} Created by Kelompok 23
      </Footer>
    </Layout>
  );
}

export default App;
