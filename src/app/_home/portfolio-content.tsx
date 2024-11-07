import {
  LinkOutlined,
  PythonOutlined
} from "@ant-design/icons";
import { Badge, Card, Divider, Space, Tag, Typography } from "antd";
import AboutMeCard from "./portfolio-cards/about-me.card";
import EducationCard from "./portfolio-cards/education.card";

const { Title, Text, Paragraph, Link } = Typography;

export default function HomePortfolioContent() {
  return (
    <Space className='portfolio' direction='vertical' size={12}>
      <AboutMeCard />
      <Divider className='portfolio-card-divider' />
      <Card id='experience' title='Experiência' className='portfolio-card'>
        <Badge.Ribbon
          text={
            <Text style={{ color: "white" }}>
              Clavis <LinkOutlined />
            </Text>
          }
          color='darkgreen'
        >
          <Link href='https://clavis.com.br/' target='_blank'>
            <Card
              title={
                <Text>
                  Analista de Segurança Ofensiva{" "}
                  <Text type='secondary' italic className='experience-date'>
                    (10/2023 - present)
                  </Text>
                </Text>
              }
              size='small'
              className='experience-card'
            >
              <Paragraph className='page-paragraph'>
              Realizo testes de invasão e simulações de ataques reais para identificar vulnerabilidades em ambientes corporativos e proteger empresas contra ameaças cibernéticas. Minha função envolve executar operações de Red Team, utilizando técnicas avançadas para avaliar a segurança de sistemas e aplicações, fornecendo recomendações de soluções práticas para mitigar riscos identificados.
              </Paragraph>
              <Paragraph className='page-paragraph'>
              Também sou responsável por elaborar relatórios detalhados e técnicos para cada teste de invasão, documentando vulnerabilidades encontradas, análises de impacto e estratégias de correção. Colaboro também com a equipe para implementarmos melhorias contínuas, e para a criação de ferramentas e automações que auxiliam no dia a dia.
              </Paragraph>
              <Tag color='darkgreen'>Teste de Invasão</Tag>
              <Tag color='darkgreen'>
                <PythonOutlined /> Python
              </Tag>
              <Tag color='darkgreen'>Rede de Computadores</Tag>
              <Tag color='darkgreen'>Sistemas Operacionais</Tag>
              <Tag color='darkgreen'>Cibersegurança</Tag>
              <Tag color='darkgreen'>Pentest Web</Tag>
              <Tag color='darkgreen'>Pentest Infra</Tag>
              <Tag color='darkgreen'>Pentest Mobile</Tag>
            </Card>
          </Link>
        </Badge.Ribbon>
        <Badge.Ribbon
          text={
            <Text style={{ color: "white" }}>
              UVA <LinkOutlined />
            </Text>
          }
          color='blue'
        >
          <Link href='https://uva.br/' target='_blank'>
            <Card
              title={
                <Text>
                  Técnico de Informática I{" "}
                  <Text type='secondary' italic className='experience-date'>
                    (09/2016 - 10/2019)
                  </Text>
                </Text>
              }
              size='small'
              className='experience-card'
            >
              <Paragraph className='page-paragraph'>
              Atuei como Técnico de Informática, prestando suporte técnico a usuários e realizando manutenção em sistemas e equipamentos. Fui responsável por configurar e administrar redes e infraestrutura, além de realizar reparos de hardware e software.
              </Paragraph>
              <Paragraph className='page-paragraph'>
              Além do suporte aos usuários, trabalhei diretamente com infraestrutura de TI e manutenção de redes. Implementei também soluções de backup e recuperação de dados.
              </Paragraph>
              <Tag color='blue'>Sistemas Operacionais</Tag>
              <Tag color='blue'>Redes de Computadores</Tag>
              <Tag color='blue'>Infraestrutura</Tag>
              <Tag color='blue'>HelpDesk</Tag>
            </Card>
          </Link>
        </Badge.Ribbon>
      </Card>
      <Divider className='portfolio-card-divider' />
      <EducationCard />
    </Space>
  );
}
