import React from "react";
import { UserContext } from "../../providers/user/user.provider";
import {
  ErrorDiv,
  FormDiv,
  FormLabel,
  FormInput,
  FormButton,
} from "./form.login.styles";
import { validateSubmit, validateChange } from "./form.login.validators";
import { withRouter } from "react-router-dom";

const FormLogin = ({ history }) => {
  const user = React.useContext(UserContext);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateSubmit(user.userName, user.setUserName, setErrorMsg);
    if (result) {
      history.push(`/${user.userName}`);
    }
  };

  const handleChange = (e) => {
    if (errorMsg) {
      setErrorMsg(null);
    }
    validateChange(e.currentTarget.value, user.setUserName, setErrorMsg);
  };

  return (
    <FormDiv>
      <div>
        <form onSubmit={handleSubmit}>
          <FormLabel>last.fm username:</FormLabel>
          <FormInput
            name="username"
            type="username"
            onChange={handleChange}
            value={user.userName}
            required
          />
          <FormButton>
            <button type="submit">Show my Top20</button>
          </FormButton>
        </form>
        {errorMsg ? <ErrorDiv>{errorMsg}</ErrorDiv> : <div></div>}
      </div>
    </FormDiv>
  );
};

export default withRouter(FormLogin);
