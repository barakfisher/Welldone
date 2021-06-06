import "../../css/menu.css";
import React, { useContext,  useEffect } from "react";
import { ListGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import AppContext from "../../context/app/appContext";
import { Fragment } from "react";

const AddCategory = () => {
  const appContext = useContext(AppContext);
  const {
    setCurrentCategory,
    currentCategory,
    currentAction,
    setCurrentAction,
    categoryInput, setCategoryInput
  } = appContext;



  const addCategoryToList = async (name) => {
    setCurrentAction('AddConfirm');
  };


  const editCategory = () => {
    setCurrentAction('EditConfirm');
  };

  useEffect(() => {
    if (currentAction === "Edit") {
      setCategoryInput(currentCategory.name);
    }
    else if(currentAction === "Add"){
      setCurrentCategory({});
    }
    //eslint-disable-next-line
  }, [currentAction]);

  return (
    <ListGroup.Item className={`add-category-container`}>
      <InputGroup>
        {currentAction === "Edit" && (
          <Fragment>
            <FormControl
              placeholder="Category Name"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.currentTarget.value)}
            />
            <Button
              className="addBtn"
              variant="outline-primary"
              onClick={() => {
                editCategory();
              }}
            >
              Edit
            </Button>
          </Fragment>
        )}
        {currentAction === "Add" && (
          <Fragment>
            <FormControl
              placeholder="Category Name"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.currentTarget.value)}
            />
            <Button
              className="addBtn"
              variant="outline-primary"
              onClick={() => {
                addCategoryToList();
              }}
            >
              add
            </Button>
          </Fragment>
        )}
      </InputGroup>
    </ListGroup.Item>
  );
};

export default AddCategory;
