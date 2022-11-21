import { useState } from "react";

function Input() {
  const [state, setState] = useState("");

  const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  const test = (str: string) => {
    console.log(regex.test(str));
    console.log(str.match(regex));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    test(value);

    setState(value);

    console.log(e.target);
  };

  return (
    <div>
      <input name="test" value={state} onChange={handleChange} />
      <pre>{state}</pre>
    </div>
  );
}

export default Input;
