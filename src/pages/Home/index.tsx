import { ChangeEvent, useEffect, useState } from 'react';
import { getProducts, PropsProducts } from '../../services/products';
import { CardProduct } from '../../components/CardProdutct';
import { Header } from '../../components/Header';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as S from './styles';

export const Home = () => {
  const [data, setData] = useState<PropsProducts[]>();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [dataItems, setDataItems] = useState([]);

  const allCategories = data?.map((item) => item?.category?.name);
  const categories: any = new Set(allCategories);
  const categoriesFiltered = [...categories];

  const filterSelecteds = (item: boolean) =>
    item ? item : selectedItems.length === 0 ? data : null;

  const filterSearch = (item: { category: { name: string; }; name: string; }) =>
    item.category.name.toLowerCase().includes(search) ||
      item.name.toLowerCase().includes(search)
      ? item
      : null;

  const handleSelecteds = (e: ChangeEvent<HTMLInputElement>, itemName: string) => {
    if (e.target.checked) {
      setSelectedItems((value) => [...value, itemName]);
    } else {
      setSelectedItems(selectedItems.filter((e: string) => e !== itemName));
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const buildItems = (data: any[] | undefined) =>
    data
      ?.filter(filterSearch)
      .filter((item) =>
        filterSelecteds(selectedItems.includes(item.category.name))
      );

  const handleData = async () => {
    const response = await getProducts();
    setData(response)
  };

  useEffect(() => {
    handleData()
  }, []);

  useEffect(() => {
    const result: any = buildItems(data);
    setDataItems(result);
  }, [search, selectedItems, buildItems, data]);

  return (
    <>
      <Header
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.ContainerPage>
        <S.ColumnCategories>
          <S.Title>
            Filtros selecionados ({selectedItems?.length})
          </S.Title>
          {categoriesFiltered.map((itemName: string) => (
            <S.ContainerCheckbox>
              <FormControlLabel
                label={`${itemName} (${data?.filter((e) => e.category.name === itemName).length})`}
                control={
                  <Checkbox
                    onChange={(e) => handleSelecteds(e, itemName)}
                  />
                }
              />
            </S.ContainerCheckbox>
          ))}
        </S.ColumnCategories>
        <S.ContainerContent>
          <S.TitleResult>
            {dataItems?.length} Resultados:
          </S.TitleResult>
          {data?.filter(filterSearch)
            .filter((e) => filterSelecteds(selectedItems.includes(e.category.name)))
            .map((item) =>
              <CardProduct
                image={item?.images[0]?.asset?.url}
                alt={item?.images[0]?.alt}
                name={item?.name}
              />
            )}
        </S.ContainerContent>
      </S.ContainerPage>
    </>
  )
};