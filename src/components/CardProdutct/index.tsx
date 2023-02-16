import * as S from './styles';

interface PropsCardProduct {
  image: string;
  alt: string;
  name: string;
}

export const CardProduct = ({ image, alt, name }: PropsCardProduct) => {
  return (
    <S.ContainerCard>
      <S.Image src={image} alt={alt} />
      <S.NameProduct>
        {name}
      </S.NameProduct>
    </S.ContainerCard>
  )
};