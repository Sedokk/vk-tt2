import { Button, FormItem, FormLayoutGroup, Textarea } from "@vkontakte/vkui";
import { ChangeEventHandler, forwardRef } from "react";

type CatsProps = {
  value: string;
  onClick: () => void;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  isLoading: boolean;
};

export const Cats = forwardRef<HTMLTextAreaElement, CatsProps>(
  ({ value, onClick, onChange, isLoading }, forwardedRef) => {
    return (
      <FormLayoutGroup mode="vertical">
        <FormItem top="Факт">
          <Textarea
            value={value}
            onChange={onChange}
            style={{ maxWidth: 1000 }}
            getRef={forwardedRef}
          />
        </FormItem>
        <FormItem>
          <Button onClick={onClick} loading={isLoading}>
            Запросить факт
          </Button>
        </FormItem>
      </FormLayoutGroup>
    );
  }
);
