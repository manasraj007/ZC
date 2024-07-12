import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BookmarkList } from "./bookmark/BookmarkList";
import { BookmarkCreate } from "./bookmark/BookmarkCreate";
import { BookmarkEdit } from "./bookmark/BookmarkEdit";
import { BookmarkShow } from "./bookmark/BookmarkShow";
import { PersonalProfileList } from "./personalProfile/PersonalProfileList";
import { PersonalProfileCreate } from "./personalProfile/PersonalProfileCreate";
import { PersonalProfileEdit } from "./personalProfile/PersonalProfileEdit";
import { PersonalProfileShow } from "./personalProfile/PersonalProfileShow";
import { SolutionList } from "./solution/SolutionList";
import { SolutionCreate } from "./solution/SolutionCreate";
import { SolutionEdit } from "./solution/SolutionEdit";
import { SolutionShow } from "./solution/SolutionShow";
import { CodeEditorList } from "./codeEditor/CodeEditorList";
import { CodeEditorCreate } from "./codeEditor/CodeEditorCreate";
import { CodeEditorEdit } from "./codeEditor/CodeEditorEdit";
import { CodeEditorShow } from "./codeEditor/CodeEditorShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { CodingContestList } from "./codingContest/CodingContestList";
import { CodingContestCreate } from "./codingContest/CodingContestCreate";
import { CodingContestEdit } from "./codingContest/CodingContestEdit";
import { CodingContestShow } from "./codingContest/CodingContestShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ZCODER"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bookmark"
          list={BookmarkList}
          edit={BookmarkEdit}
          create={BookmarkCreate}
          show={BookmarkShow}
        />
        <Resource
          name="PersonalProfile"
          list={PersonalProfileList}
          edit={PersonalProfileEdit}
          create={PersonalProfileCreate}
          show={PersonalProfileShow}
        />
        <Resource
          name="Solution"
          list={SolutionList}
          edit={SolutionEdit}
          create={SolutionCreate}
          show={SolutionShow}
        />
        <Resource
          name="CodeEditor"
          list={CodeEditorList}
          edit={CodeEditorEdit}
          create={CodeEditorCreate}
          show={CodeEditorShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="CodingContest"
          list={CodingContestList}
          edit={CodingContestEdit}
          create={CodingContestCreate}
          show={CodingContestShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
