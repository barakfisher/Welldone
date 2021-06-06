import React, { Fragment, useEffect, useContext } from "react";
import AppContext from "../../context/app/appContext";
import { ButtonGroup } from "react-bootstrap";

import {
  faPlus,
  faTrash,
  faEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import ToolbarBtn from "./ToolbarBtn";
import AddCategory from "./AddCategory";
import "../../css/toolbar.css";

const Toolbar = () => {
  const appContext = useContext(AppContext);
  const {
    currentAction,
    currentCategory,
    setCurrentCategory,
    categories,
    setCategories,
    categoryInput,
    setToast,
    setLoading,
    setCategoryInput,
  } = appContext;

  const toolbarActions = [
    { name: "Add", icon: faPlus, text: "Add Category" },
    { name: "Delete", icon: faTrash, text: "Remove Category" },
    { name: "Edit", icon: faEdit, text: "Edit Category" },
    { name: "View", icon: faEye, text: "View Category" },
  ];

  const saveCategories = (_categories) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem("categories", JSON.stringify(_categories));
        resolve(_categories);
      }, 500);
    });
  };

  

  const handleUpdateServer = async(postData) =>{
    setLoading(true);
    const res = await saveCategories(postData);
    setLoading(false);
    setCategories(res);
    setCurrentCategory({});
    setCategoryInput("");
  }


  const isCategoryFound = () => {
    if (categories.length === 0) {
      return false;
    }
    const categoryFound = categories.find(({ name }) => categoryInput === name);
    if (categoryFound) {
      setToast({
        title: `Action Failed`,
        content: "Category name already exsists",
        delay: 7000,
      });
      return true;
    }
    if(categoryInput.trim() === ''){
      setToast({
        title: `Action Failed`,
        content: "Please fill category name",
        delay: 7000,
      });
      return true;
    }
    return false;
  };

  const handleAdd = async () => {
    const name = categoryInput;
    const category = { name };
    if (!isCategoryFound()) {
      const _categories = [...categories, category];
      handleUpdateServer(_categories);
    }
  };

  const handleEdit =  () => {
    if (!isCategoryFound()) {
      const _categories = categories.map((category) => {
        if (category.name === currentCategory.name) {
          category.name = categoryInput;
        }
        return category;
      });
       handleUpdateServer(_categories)
    }
  };
  const handleDelete = () => {
    const _categories = categories.filter(
      ({ name }) => name !== currentCategory.name
    );
    handleUpdateServer(_categories);
  };


  useEffect(() => {
    if (currentAction === "Delete") {
      handleDelete();
    }
    if (currentAction === "EditConfirm") {
      handleEdit();
    }
    if (currentAction === "AddConfirm") {
      handleAdd();
    }
    //eslint-disable-next-line
  }, [currentAction]);

  return (
    <Fragment>
      <ButtonGroup
        disabled={true}
        className="me-2 toolbar"
        aria-label="First group"
      >
        {toolbarActions.map(({ icon, text, name }, index) => (
          <ToolbarBtn
            icon={icon}
            text={text}
            key={`toolbar-icon-${index}`}
            name={name}
          />
        ))}
      </ButtonGroup>

      <AddCategory />
    </Fragment>
  );
};
export default Toolbar;
