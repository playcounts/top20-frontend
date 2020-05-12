import React from "react";
import { UserContext } from "../../providers/user/user.provider";
import {
  ErrorDiv,
  FormDiv,
  FormLabel,
  FormInput,
  FormButton,
  FormInputGroup,
} from "./form.login.styles";
import CustomButton from "../button/button.component";
import { validateSubmit, validateChange } from "./form.login.validators";
import { withRouter } from "react-router-dom";

export const messages = {
  FormLastFMButtonMessage: "Show my Top20",
  FormLastFMUsernameLabelMessage: "last.fm username",
  FormUserNameMissingValidation: "You require a name.",
};

const FormLogin = ({ history }) => {
  const { userProperties } = React.useContext(UserContext);
  const [userName, setUserName] = React.useState(userProperties.userName);
  const [errorMsg, setErrorMsg] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    doSubmit();
  };

  const doSubmit = () => {
    const result = validateSubmit(userName, setUserName, setErrorMsg);
    if (result) {
      history.push(`/${userName}`);
    }
  };

  const handleChange = (e) => {
    if (errorMsg) {
      setErrorMsg(null);
    }
    validateChange(e.currentTarget.value, setUserName, setErrorMsg);
  };

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 13:
        doSubmit();
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <FormDiv>
      <div>
        <form onSubmit={handleSubmit}>
          <FormInputGroup>
            <FormLabel>{messages.FormLastFMUsernameLabelMessage}</FormLabel>
            <FormInput
              autoFocus
              name="username"
              type="username"
              data-testid="username"
              onChange={handleChange}
              value={userName}
              size={15}
              required
            />
          </FormInputGroup>
          <FormButton>
            <CustomButton
              type="submit"
              testid="submit"
              text={messages.FormLastFMButtonMessage}
            />
          </FormButton>
        </form>
        {errorMsg ? (
          <ErrorDiv data-testid="error">{errorMsg}</ErrorDiv>
        ) : (
          <div></div>
        )}
      </div>
    </FormDiv>
  );
};

export default withRouter(FormLogin);
