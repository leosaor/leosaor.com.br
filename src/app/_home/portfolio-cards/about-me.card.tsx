import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export default function AboutMeCard() {
  return (
    <Card id='about-me' title='Sobre mim' className='portfolio-card'>
      <Paragraph className='page-paragraph'>
        {`Sou brasileiro, tenho 28 anos, moro no Rio de Janeiro e sou apaixonado por futebol, videogames e música, sempre tive curiosidade em entender como as coisas funcionam. Meu interesse por computadores começou cedo, acompanhando meu pai em manutenções de computadores. Esse espírito investigativo acabou me levando à área de Segurança da Informação.`}
      </Paragraph>
      <Paragraph className='page-paragraph'>
        {`Atualmente, meu foco principal é proteger ambientes digitais e fortalecer a segurança das empresas usando meus conhecimentos em testes de invasão e segurança ofensiva. Como Analista de Segurança Ofensiva, meu objetivo é não apenas identificar vulnerabilidades, mas também propor soluções práticas e eficazes que protejam sistemas e aplicações contra ataques e ameaças.`}
      </Paragraph>
      <Paragraph className='page-paragraph'>
        {`Na Clavis faço parte do time de segurança ofensiva, responsável por simular ataques reais e realizar testes de invasão, ajudando empresas a identificar pontos críticos de segurança antes que sejam explorados por atacantes maliciosos. Paralelamente, atuo como Bug Hunter, caçando falhas e colaborando para a segurança de diversas aplicações pelo mundo.`}
      </Paragraph>
      <Paragraph className='page-paragraph'>
        {`Minhas metas atuais estão focadas no crescimento profissional e na especialização em segurança ofensiva. Sou formado em Análise e Desenvolvimento de Sistemas e possuo a certificação DCPT (Desec Certified Penetration Tester). Atualmente, estou cursando a pós-graduação em Offensive Cyber Security - Red Team Operations pela FIAP e me preparando para obter a certificação eWPTX.`}
      </Paragraph>
    </Card>
  );
}
