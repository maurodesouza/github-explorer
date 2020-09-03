import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <S.Header>
        <img src={logo} alt="GIthub Explorer" />
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </S.Header>

      <S.RepositoryInfo>
        <header>
          <img src="https://github.com/maurodesouza.png" alt="" />
          <div>
            <strong>asdadasdasd</strong>
            <span>adadada</span>
          </div>
        </header>

        <ul>
          <li>
            <strong>1234</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>1234</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>1234</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to="/repository">
          <div>
            <strong>repository.full_name</strong>
            <span>epository.description</span>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </S.Issues>
    </>
  );
};

export default Repository;
