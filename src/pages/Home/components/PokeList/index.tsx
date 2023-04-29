import Card from '../../../../components/Card';
import { Result } from '../../../../models/Pokemon';
import * as S from './styles';

interface IPokeList {
  pokemonList: Result[];
}

const PokeList: React.FC<IPokeList> = ({ pokemonList }) => {
  return (
    <S.Wrapper>
      {pokemonList.map((pokemon) => {
        return <Card key={pokemon.name} pokemon={pokemon.name} />;
      })}
    </S.Wrapper>
  );
};

export default PokeList;