import { useMutation } from "@tanstack/react-query";
import { Cats } from "./Cats";
import { getData } from "../../api/getData";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import { CatsResponse } from "../../api/types";

export const CatsContainer = () => {
  const [value, setValue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const requestFact = useMutation<CatsResponse>({
    mutationFn: () => getData("https://catfact.ninja/fact"),
    onSuccess: (data) => {
      setValue(data.fact);
    },
  });

  const onClick = () => {
    requestFact.mutate();
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (ev) => {
    setValue(ev.target.value);
  };

  useEffect(() => {
    const position = value.split(" ")[0].length;

    if (!textareaRef.current || !value) {
      return;
    }

    textareaRef.current.selectionStart = position;
    textareaRef.current.selectionEnd = position;
    textareaRef.current.focus();
  }, [value]);

  return (
    <Cats
      ref={textareaRef}
      onClick={onClick}
      value={value}
      onChange={onChange}
      isLoading={requestFact.isPending}
    />
  );
};
