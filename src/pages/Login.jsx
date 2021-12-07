import CTA from "../components/CTA";
import Error from "../components/Error";
import FormInput from "../components/FormInput";
import useAuth from "../hooks/useAuth";
import useForm from "../hooks/useForm";

export default function Login() {
  const { values, handleChange } = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const { loginUser, error } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser(values);
  };

  return (
    <div className="page" style={{ justifyContent: "center" }}>
      <div className="inlineForm">
        <h3>Login</h3>
        <div className="inlineForm__notif">
          {error && <Error error={error.messages} />}
        </div>
        <form onSubmit={handleLogin}>
          <FormInput
            type={"text"}
            placeholder={"Usuario"}
            name={"username"}
            value={values.username}
            handleChange={handleChange}
          />
          <FormInput
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            value={values.password}
            handleChange={handleChange}
          />
          <div className="inlineForm__submit">
            <CTA name={"login"} type={"submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}
