import { ChangeEventHandler, useCallback, useState } from "react";
import { Age } from "./Age";
import { useMutation } from "@tanstack/react-query";
import { getAgeMemoized } from "../../api/getAgeMemoized";

export const AgeContainer = () => {
  const [name, setName] = useState<string>("");
  const getAge = useCallback(getAgeMemoized(), []);

  const requestAge = useMutation<number, Error, { name: string }>({
    mutationFn: ({ name }) => getAge(name),
  });

  const onClick = () => {
    if (!name) {
      return;
    }

    requestAge.mutate({ name });
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setName(ev.target.value);
  };

  const age = requestAge.data;

  return (
    <Age
      value={name}
      onChange={onChange}
      age={age}
      onClick={onClick}
      isLoading={requestAge.isPending}
      btnDisabled={!name}
    />
  );
};
