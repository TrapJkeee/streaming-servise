import { Container } from "components/Contanier/Container";

import "./Catalog.scss";

import CatalogFilters from "./CatalogFilters";
import CatalogBody from "./CatalogBody";
import { Movies } from "types";

export interface CatalogProps {
  data: Movies[];
  title: string;
}

const Catalog = ({ title, data }: CatalogProps) => {
  return (
    <section>
      <Container>
        <div className="catalog">
          <div className="catalog__top">
            <h1 className="catalog__title">{title}</h1>
            <CatalogFilters />
          </div>
          <CatalogBody data={data} />
        </div>
      </Container>
    </section>
  );
};

export default Catalog;