import * as S from './styles';

interface PropsCardProduct {
  image: string;
  alt: string;
  name: string;
}

export const CardProduct = ({ image, alt, name }: PropsCardProduct) => {
  return (
    <S.ContainerCard>
      <img src={image} alt={alt} width={250} height={250} />
      <S.NameProduct>
        {name}
      </S.NameProduct>
    </S.ContainerCard>
  )
};