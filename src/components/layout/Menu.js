import "../../css/menu.css";
import React, { useContext, useEffect, Fragment } from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
import AppContext from "../../context/app/appContext";
import Category from "./Category";
import Toolbar from "./Toolbar";

const Menu = () => {
  const appContext = useContext(AppContext);
  const { currentCategory, categories, setCategories, setLoading, isLoading } =
    appContext;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const cat = JSON.parse(localStorage.getItem("categories"));
      const _categories = cat ? cat : [];
      setCategories(_categories);
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  const toolbarTitle = currentCategory.name
    ? `Category ${currentCategory.name}`
    : `No Category`;
  return (
    <div className="menu-container">
      <Card>
        <Card.Header>
          <Row>
            <Col className="m-auto title d-none d-sm-block" xs={12} sm={6} >
              {toolbarTitle}
            </Col>
            <Col className="toolbar-container" xs={12} sm={6}>
              <Toolbar/>
            </Col>
          </Row>
        </Card.Header>

        <ListGroup variant="flush" className="list-items">
          {categories.length ? (
            categories.map((category, index) => {
              const isActive = category.name === currentCategory.name;
              return (
                <Category
                  category={category}
                  isActive={isActive}
                  key={`category-item-${index}`}
                />
              );
            })
          ) : (
            <Fragment>
              {isLoading ? (
                <Container className="empty-categories-msg">
                  <h4> Fetching Categories </h4>
                  <h5>Please Wait...</h5>
                </Container>
              ) : (
                <Container className="empty-categories-msg">
                  <h4> No Categories (Yet) </h4>
                  <h5>Please Add A New Category</h5>
                </Container>
              )}
            </Fragment>
          )}
        </ListGroup>
      </Card>
    </div>
  );
};
export default Menu;
