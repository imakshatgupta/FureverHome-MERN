import React from "react";
import "./Alert.css";

function Alert(props) {

  return (

<>

 <div style={{display:"flex" , justifyContent : "center" , alignItems : "center"}} >
        {props.alert && <div  className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.msg}
        </div>}
    </div>
</>
  );
  };

export default Alert;
