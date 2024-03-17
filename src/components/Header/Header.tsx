import { PanelHeader, Tabs, TabsItem } from "@vkontakte/vkui";
import { FC } from "react";

type Pages = "cats" | "age";

type HeaderProps = {
  active: Pages;
  setActive: (page: Pages) => void;
};

const TABS = [
  {
    title: "Факты о котиках",
    label: "cats",
  },
  {
    title: "Возраст",
    label: "age",
  },
] as const;

export const Header: FC<HeaderProps> = ({ active, setActive }) => {
  return (
    <PanelHeader>
      <Tabs>
        {TABS.map(({ title, label }) => (
          <TabsItem
            selected={active === label}
            onClick={() => setActive(label)}
            key={label}
          >
            {title}
          </TabsItem>
        ))}
      </Tabs>
    </PanelHeader>
  );
};
