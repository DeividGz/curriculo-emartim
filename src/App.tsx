import Section from "./components/section";
import {
  Phone,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import TechSkillsSection from "./components/tech-skills-section";
import Carousel from "./components/carousel";

export default function App() {
  const carouselImages = [
    {
      url: "1",
      text: "Início",
    },
    {
      url: "2",
      text: "Cadastro",
    },
    {
      url: "3",
      text: "Login",
    },
    {
      url: "4",
      text: "Home",
    },
    {
      url: "5",
      text: "Treinos",
    },
    {
      url: "6",
      text: "Criar treino",
    },
    {
      url: "7",
      text: "Criar estratégia",
    },
    {
      url: "8",
      text: "Criar evento",
    },
    {
      url: "9",
      text: "Criar clube",
    },
    {
      url: "10",
      text: "Visualizar clube",
    },
    {
      url: "11",
      text: "Visualizar perfil",
    },
    {
      url: "13",
      text: "Créditos",
    },
    {
      url: "14",
      text: "Placar",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="flex justify-center items-center bg-header-sm md:bg-header-md lg:bg-header-lg xl:bg-header-xl 2xl:bg-header-2xl h-16 font-semibold text-2xl text-white">
        Deivid Gomes Zanotti
      </header>
      {/* Dados */}
      <Section graySection title="Contato">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Phone weight="fill" />
            (11) 97380-2167
          </div>
          <div className="flex items-center gap-2">
            <Envelope weight="fill" />
            deivid0726@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <LinkedinLogo weight="fill" />
            <a
              target="blank"
              className="hover:text-emartim-secondary underline"
              href="https://www.linkedin.com/in/deivid-gomes-zanotti-b2972023a/"
            >
              Deivid Gomes Zanotti
            </a>
          </div>
          <div className="flex items-center gap-2">
            <GithubLogo weight="fill" />
            <a
              target="blank"
              className="hover:text-emartim-secondary underline"
              href="https://github.com/DeividGz"
            >
              DeividGz
            </a>
          </div>
        </div>
      </Section>
      {/* Objetivo */}
      <Section title="Objetivo profissional">
        <p>Trabalhar como desenvolvedor de sistemas.</p>
      </Section>
      {/* Resumo */}
      <Section graySection title="Resumo">
        <p>
          Tenho experiência como desenvolvedor em projetos acadêmicos e
          pessoais. Gosto de estar em constante aprendizado, buscando
          aperfeiçoar meus conceitos e me qualificando como profissional capaz
          de oferecer soluções importantes e eficientes para a vida dos meus
          usuários.
        </p>
      </Section>
      {/* Educação */}
      <Section title="Educação">
        <div className="bg-emartim-secondary p-2 rounded-lg text-center text-white">
          <p>
            <span className="font-semibold">
              Tecnólogo em Analise e Desenvolvimento de Sistemas
            </span>
            <br />
            Fatec Bragança Paulista
            <br />
            2022 - 2024
          </p>
        </div>
        <div className="bg-emartim-primary p-2 rounded-lg text-center text-white">
          <p>
            <span className="font-semibold">
              Técnico em Desenvolvimento de Sistemas
            </span>
            <br />
            Etec Carmine Biagio Tundisi
            <br />
            2019 - 2021
          </p>
        </div>
      </Section>
      {/* Experiência profissional */}
      <Section graySection title="Experiência profissional">
        <div className="space-y-2 bg-white p-2">
          <p className="font-semibold">
            Estagiário de TI
            <br />
            Secretaria da Saúde de Atibaia
          </p>
          <p>Trabalhei com Google Planilhas, JavaScript e Firebase.</p>
          <p>
            Desenvolvi e refatorei algoritmos e pequenos sistemas para agilizar
            processos do setor.
          </p>
          <p>
            Fiz o levantamento de requisitos dos sistemas a serem desenvolvidos
            a partir de conversas com os meus colegas do setor, buscando
            entender a atender da melhor forma as demandas existentes.
          </p>
        </div>
      </Section>
      {/* Projeto destaque */}
      <Section title="Projeto destaque">
        <Carousel images={carouselImages} />
        <div className="space-y-2">
          <p className="font-semibold">Fly TM</p>
          <p>
            O projeto Fly TM trata-se de uma plataforma para auxílio do jogador
            de tênis de mesa. Esse foi o meu trabalho final da faculdade. Dentro
            da plataforma, o usuário pode criar treinos e estratégias
            personalizadas. Realizar compra de créditos para criar um clube, ou
            fazer parte de um já criado gratuitamente. Existe também uma sessão
            de eventos, em que os usuários podem ficar a par de coisas
            relacionadas ao esporte que estão acontecendo.
          </p>
          <p className="font-semibold">Tecnologias utilizadas</p>
          <div className="bg-emartim-section-gray p-2 rounded-lg">
            <p className="font-semibold">API</p>
            <p>
              Node.js com Fastify, TypeScript, Prisma ORM, Docker para rodar um
              banco de dados PostgreSQL, Axios, Zod e integração com Mercado
              pago.
            </p>
          </div>
          <div className="bg-emartim-section-gray p-2 rounded-lg">
            <p className="font-semibold">Frontend</p>
            <p>
              Next.js, TypeScript, Tailwindcss, Zod, Motion (Animações) e
              Firebase para armazenamento de imagens.
            </p>
          </div>
          <div className="bg-emartim-section-gray p-2 rounded-lg">
            <p className="font-semibold">Planejamento e Controle</p>
            <p>Git, Github, Trello e Figma.</p>
          </div>
        </div>
      </Section>
      {/* habilidades técnicas */}
      <TechSkillsSection />
      {/* idiomas */}
      <Section title="Idiomas">
        <p>
          Inglês básico/intermediário
          <br />
          Exame TOEIC: 755 pontos
        </p>
      </Section>
      {/* soft skills */}
      <Section graySection title="Competências sociais">
        <div className="space-y-2">
          <p>Boa comunicação.</p>
          <p>Proatividade, sempre buscando auxiliar os colegas de time.</p>
          <p>Aprendizado rápido e adaptabilidade.</p>
        </div>
      </Section>
    </div>
  );
}
