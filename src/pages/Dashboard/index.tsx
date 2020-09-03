import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />

      <S.Title>Explore repositórios no GitHub</S.Title>

      <S.Form>
        <input placeholder="Digite o repositório aqui" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/maurodesouza.png" alt="Mauro de Souza" />
          <div>
            <strong>maurodesouza/vscode-simple-readme</strong>
            <p>A simple readme generator for VS Code</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </S.Repositories>
    </>
  );
};

export default Dashboard;
