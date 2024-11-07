import { Card, List, Typography } from 'antd';
import Image from 'next/image';

const { Link } = Typography;

const data = [
  {
    href: "https://postech.fiap.com.br/curso/offensive-cyber-security-red-team-ops/",
    title: `Pós-Graduação Offensive Cyber Security - FIAP`,
    avatar: `/img/profile/postechfiap.png`,
    content: `A pós-graduação da FIAP (Offensive Cyber Security - RedTeam Operations) oferece uma formação 100% digital e prática, aprofundando conhecimentos em cibersegurança para capacitar profissionais como especialistas na identificação de vulnerabilidades. O curso prepara para atuação em operações de Red Team e segurança ofensiva. A formação desenvolve habilidades para realizar testes de intrusão, definir escopos técnicos para auditorias e coordenar times de Red Team e Pentest, além de assessorar empresas com uma visão ofensiva e estratégica sobre segurança digital.`,
    description: `Cursando, conclusão em 10/2025`,
  },
  {
    href: "https://desecsecurity.com/valida-dcpt/VCYH-LWHSA-VFXB",
    title: `Desec Certified Penetration Tester - DCPT`,
    avatar: `/img/profile/dcpt.png`,
    content: `No Brasil, a Desec Security desenvolveu a DCPT – Desec Certified Penetration Tester, a primeira certificação de Pentest da América Latina. Com exame totalmente prático, a DCPT foi criada para validar a capacidade técnica de profissionais na execução de testes de invasão em diversos tipos de ambientes, garantindo que o certificado tenha habilidades reais e aplicáveis no mercado de cibersegurança.`,
    description: `Concluído em 2024`,
  },
  {
    href: "https://uva.br/",
    title: `Análise e Desenvolvimento de Sistemas - UVA`,
    avatar: `/img/profile/uvalogo.svg`,
    content: `O Curso de Análise e Desenvolvimento de Sistemas capacita profissionais para desenvolver e implantar sistemas de informação. Com foco em raciocínio lógico, linguagens de programação e metodologias de projetos, o curso prepara para os desafios do mercado de tecnologia.`,
    description: `Graduado em 2024`,
  },
];

export default function EducationCard() {
  return (
    <Card id='education' title='Educação' className='portfolio-card'>
        <List
          itemLayout='vertical'
          size='large'
          dataSource={data}
          renderItem={(item) => (
            <Link href={item.href} target='_blank'>
              <List.Item
                key={item.title}
                extra={
                  <Image
                    height={214}
                    width={214}
                    alt='logo'
                    src={item.avatar}
                  />
                }
              >
                <List.Item.Meta
                  title={item.title}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            </Link>
          )}
        />
      </Card>
  )
}