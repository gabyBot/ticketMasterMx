
import { useForm } from "react-hook-form";

const FormEvents = () => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm();

  const handleClearClick = () => {
    reset();
  };

  const handleOnSubmitForm = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleOnSubmitForm)}>
      <label>
        name:
        <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        age:
        <input {...register("age", { required: true })} />
      </label>
      <br />
      <label>
        address:
        <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        phone:
        <input {...register("phone", { required: true })} />
      </label>
      <button type="button" onClick={handleClearClick}>
        Clear
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormEvents;
