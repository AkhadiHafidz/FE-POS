import { Container, Row } from "react-bootstrap";
import NavbarComponent from "../NavbarComponent.jsx";
import Listcategory from "./ListCategory.jsx";
import Listproduct from "./ListProduct.jsx";
import ListOrder from "./ListOrder.jsx";

const ListSales = () => {
  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <Row className="mt-3">
          <Listcategory />
          <Listproduct />
          <ListOrder />
        </Row>
      </Container>
    </>
  );
};

export default ListSales;
