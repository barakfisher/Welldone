import React, { useContext } from "react";
import AppContext from "../../context/app/appContext";
import { ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Category = (props) => {
  const { category, isActive } = props;
  const appContext = useContext(AppContext);
  const { setCurrentCategory,currentCategory, setCurrentAction } = appContext;

  const handleClick = () => {
    setCurrentAction('')
    if(currentCategory.name === category.name){
      setCurrentCategory({});
    }else{
      setCurrentCategory(category);
    }
    
  };

  return (
    <ListGroup.Item
      onClick={() => handleClick()}
      className={`${isActive ? "active" : ""}`}
    >
      {category.name}
    </ListGroup.Item>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,  
  isActive: PropTypes.bool.isRequired,  
};
export default Category;
