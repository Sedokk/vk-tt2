import { Panel, View } from "@vkontakte/vkui";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { CatsContainer } from "./components/Cats";
import { AgeContainer } from "./components/Age";

const App = () => {
  const [page, setPage] = useState<"cats" | "age">("cats");
  return (
    <View activePanel="main">
      <Panel id="main">
        <Header active={page} setActive={setPage} />
        <View activePanel={page}>
          <Panel id="cats">
            <CatsContainer />
          </Panel>
          <Panel id="age">
            <AgeContainer />
          </Panel>
        </View>
      </Panel>
    </View>
  );
};

export default App;
