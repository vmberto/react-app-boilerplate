import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { DefaultButton, RoundedButton } from 'app/ui/common/Button';
import { Input } from 'app/ui/common/Input';

type TParams = { id: string };
const Product: FC<RouteComponentProps<TParams>> = function(props) {
  return (
    <div>
      <h2>This is a page for product with ID: {props.match.params.id} </h2>
      <div>
      <DefaultButton style={{ margin: '1em' }}>
        Ativos
      </DefaultButton>
      <DefaultButton isGhost style={{ margin: '1em' }}>
        Inativos
      </DefaultButton>
      <DefaultButton danger style={{ margin: '1em' }}>
        Ativos
      </DefaultButton>
      <DefaultButton isGhost danger style={{ margin: '1em' }}>
        Inativos
      </DefaultButton>
      <RoundedButton style={{ margin: '1em' }}>
        Cadastrar +
      </RoundedButton>
      <RoundedButton isGhost style={{ margin: '1em' }}>
        Deletar -
      </RoundedButton>
      </div>
      <div>
        <Input style={{ margin: '1em' }} placeholder="Pesquisar..."/>
      </div>
    </div>
  );
}

export default Product;