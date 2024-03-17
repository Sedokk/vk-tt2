import {
  Button,
  Div,
  FormItem,
  FormLayoutGroup,
  Input,
  Title,
} from "@vkontakte/vkui";
import { ChangeEventHandler, FC } from "react";

type AgeProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isLoading: boolean;
  onClick: () => void;
  age?: number;
  btnDisabled: boolean;
};

export const Age: FC<AgeProps> = ({
  value,
  onChange,
  age,
  onClick,
  isLoading,
  btnDisabled,
}) => {
  return (
    <>
      <FormLayoutGroup mode="horizontal" style={{ alignItems: "center" }}>
        <FormItem top="Имя">
          <Input value={value} onChange={onChange} />
        </FormItem>
        <FormItem>
          <Button onClick={onClick} loading={isLoading} disabled={btnDisabled}>
            Получить возраст
          </Button>
        </FormItem>
      </FormLayoutGroup>
      {age && (
        <Div>
          <Title>Возраст: {age}</Title>
        </Div>
      )}
    </>
  );
};
