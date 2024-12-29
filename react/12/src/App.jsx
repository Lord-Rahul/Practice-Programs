import { useForm } from "react-hook-form";
import "./App.css"

function App() {
  const { register, handleSubmit, setError, formState: { isSubmitting, errors } } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);

    })
  }
  const onSubmit = async (data) => {
    // await delay(2) // simulating network delay
    let r = await fetch("http://localhost:3000/", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)
    })
    let res = await r.text()
    console.log(data, res)
    // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  }



  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">

        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="username" {...register("username", { required: { value: true, message: "this feild is required " }, minLength: { value: 5, message: "minimum length is 5" }, maxLength: { value: 8, message: "maximum length is 8 " } })} type="text" />
          {errors.username && errors.username.message}
          <br />
          <input placeholder="password" {...register("password", { required: { value: true, message: "this feild is required " }, minLength: { value: 5, message: "minimum length is 5" }, maxLength: { value: 8, message: "maximum length is 8 " } })} type="password" />
          <br />
          {errors.password && errors.password.message}

          <input disabled={isSubmitting} type="submit" value="submit" />

          {errors.form && errors.form.message}

        </form>
      </div>
    </>
  )
}


export default App
