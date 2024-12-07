import Section from "./section";
import TechArea from "./tech-area";

const TechSkillsSection = () => {
  return (
    <Section graySection title="Habilidade técnicas">
      <TechArea
        title="Linguagens e frameworks"
        urls={[
          "javascript/javascript-original",
          "typescript/typescript-original",
          "nodejs/nodejs-original-wordmark",
          "react/react-original-wordmark",
          "nextjs/nextjs-original-wordmark",
          "fastify/fastify-original-wordmark",
          "prisma/prisma-original-wordmark",
        ]}
      />
      <TechArea
        green
        title="Banco de dados"
        urls={[
          "mysql/mysql-original-wordmark",
          "postgresql/postgresql-original-wordmark",
        ]}
      />
      <TechArea
        title="Estilização"
        urls={["css3/css3-original", "tailwindcss/tailwindcss-plain-wordmark"]}
      />
      <TechArea
        green
        title="Ferramentas"
        urls={[
          "docker/docker-original-wordmark",
          "git/git-original-wordmark",
          "github/github-original-wordmark",
          "trello/trello-original-wordmark",
          "figma/figma-original",
        ]}
      />
      <TechArea
        green
        title="Contato prévio"
        urls={[
          "php/php-original",
          "csharp/csharp-original",
          "python/python-original-wordmark",
          "java/java-original-wordmark",
        ]}
      />
    </Section>
  );
};

export default TechSkillsSection;
