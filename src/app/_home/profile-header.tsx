import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MediumOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Divider, Image, Space, Typography } from "antd";

const { Title, Paragraph, Link } = Typography;

export default function HomeProfileHeader() {
  return (
    <Space className="profile" direction="vertical" size={8}>
      <div className="profile-pic-wrapper">
        <Image
          alt=""
          src="/img/profile/leosaor.jpg"
          preview={false}
          className="profile-pic"
          width={470}
        />
      </div>
      <Title className="profile-title">Leonardo de Sousa Alves de Oliveira Ramos</Title>
      <Title level={2} className="profile-subtitle">
        Analista de Segurança Ofensiva <br /> Pentester <br /> BugHunter
      </Title>
      <Paragraph className="page-paragraph">
        Eu identifico vulnerabilidades e realizo testes de invasão para garantir a segurança de sistemas e redes,
        ajudando empresas a fortalecerem sua segurança digital de forma eficiente.
      </Paragraph>
      <Divider />
      <Space direction="horizontal" size={12} className="social-media-section">
        <Link href="https://www.linkedin.com/in/leosaor/" target="_blank">
          <LinkedinOutlined className="social-media-icon" />
        </Link>
        <Link href="https://github.com/leosaor" target="_blank">
          <GithubOutlined className="social-media-icon" />
        </Link>
        <Link href="https://www.instagram.com/leosaor/" target="_blank">
          <InstagramOutlined className="social-media-icon" />
        </Link>
        <Link href="https://twitter.com/leosaor_" target="_blank">
          <TwitterOutlined className="social-media-icon" />
        </Link>
        <Link href="https://medium.com/@leosaor" target="_blank">
          <MediumOutlined className="social-media-icon" />
        </Link>
      </Space>
    </Space>
  );
}
