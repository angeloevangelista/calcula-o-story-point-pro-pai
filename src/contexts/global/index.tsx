import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { v4 as uuidv4 } from "uuid";

type User = {
  id: string;
  name: string;
};

type Estimate = {
  complexityLevel: number;
  developmentHours: number;
  testingHours: number;
  qaHours: number;
};

type Session = {
  id: string;
  estimate?: Estimate;
};

type GlobalContextData = {
  user: User;
  session: Session;

  updateSession: (newSession: Session) => void;
};

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

interface GlobalContextProviderProps {
  children: ReactNode;
}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({} as User);
  const [session, setSession] = useState<Session>({} as Session);

  useEffect(() => {
    let newUser = JSON.parse(
      localStorage.getItem("CALCULA_O_STORY_POINT_PRO_PAI:USER") || "{}"
    ) as User;

    if (!newUser.id) {
      newUser = {
        id: uuidv4(),
        name: uniqueNamesGenerator({
          dictionaries: [adjectives, animals, colors],
          length: 2,
          separator: "-",
        }),
      };

      localStorage.setItem(
        "CALCULA_O_STORY_POINT_PRO_PAI:USER",
        JSON.stringify(newUser, null, 2)
      );
    }

    let newSession = JSON.parse(
      localStorage.getItem("CALCULA_O_STORY_POINT_PRO_PAI:SESSION") || "{}"
    ) as Session;

    if (!newSession.id) {
      newSession = {
        id: uuidv4(),
        estimate: undefined,
      };

      localStorage.setItem(
        "CALCULA_O_STORY_POINT_PRO_PAI:SESSION",
        JSON.stringify(newSession, null, 2)
      );
    }

    setUser(newUser);
    setSession(newSession);
  }, []);

  const updateSession = useCallback((newSession: Session) => {
    localStorage.setItem(
      "CALCULA_O_STORY_POINT_PRO_PAI:SESSION",
      JSON.stringify(newSession, null, 2)
    );

    setSession(newSession);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        user,
        session,

        updateSession,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
