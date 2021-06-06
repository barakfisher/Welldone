import React, { useContext } from "react";
import { Tooltip, Button, OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppContext from "../../context/app/appContext";
import PropTypes from "prop-types";

const ToolbarBtn = ({ icon, text, name }) => {
  const appContext = useContext(AppContext);
  const {  setCurrentAction, currentCategory} = appContext;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );



  const isActive = currentCategory.name || name === "Add" ? true : false;
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button
        disabled={!isActive}
        classList ={isActive?`active`:`disabled`}
        variant="secondary"
        onClick={() => setCurrentAction(name)}
      >
        <FontAwesomeIcon color={"#007bff"} icon={icon} />
      </Button>
    </OverlayTrigger>
  );
};

ToolbarBtn.propTypes = {
  icon: PropTypes.object.isRequired,  
  text: PropTypes.string.isRequired,  
  name: PropTypes.string.isRequired
};
export default ToolbarBtn;
