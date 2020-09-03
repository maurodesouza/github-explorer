import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import * as S from './styles';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;
      setRepositories([repository, ...repositories]);

      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Repositório não encontrado');
    }
  };

  return (
    <>
      <img src={logo} alt="Github Explorer" />

      <S.Title>Explore repositórios no GitHub</S.Title>

      <S.Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o repositório aqui"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
