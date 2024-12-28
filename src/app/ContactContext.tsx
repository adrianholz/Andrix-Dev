import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type ContactContextTypes = {
  contact: boolean;
  setContact: Dispatch<SetStateAction<boolean>>;
};

export const ContactContext = createContext<ContactContextTypes | undefined>(
  undefined
);

export const ContactContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [contact, setContact] = useState(false);

  return (
    <ContactContext.Provider
      value={{
        contact,
        setContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
