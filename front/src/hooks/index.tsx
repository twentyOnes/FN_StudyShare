import { useState, useCallback } from "react";

type Props = {
  initialValue: null | string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useInput({ initialValue }: Props) {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
}
export default useInput;
