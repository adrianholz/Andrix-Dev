import {
  createContext,
  MutableRefObject,
  ReactNode,
  RefObject,
  useRef,
  useState,
} from "react";
import { services } from "../data/home-data";

type ServiceContextTypes = {
  service: Service;
  activeIndex: number;
  blurRefs: RefObject<HTMLDivElement[]>;
  imageRefs: MutableRefObject<HTMLElement[]>;
  titleRefs: MutableRefObject<HTMLElement[]>;
  typewriterRef: MutableRefObject<any>;
  serviceTypewriterRef: MutableRefObject<any>;
  handleTitleChange: (arg: Service) => void;
};

export const ServiceContext = createContext<ServiceContextTypes | undefined>(
  undefined
);

export const ServiceContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [service, setService] = useState(services[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const blurRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLElement[]>([]);
  const titleRefs = useRef<HTMLElement[]>([]);
  const typewriterRef = useRef<any>(null);
  const serviceTypewriterRef = useRef<any>(null);

  function handleTitleChange(service: Service) {
    const typewriter = typewriterRef.current;
    const serviceTypewriter = serviceTypewriterRef.current;
    if (typewriter) {
      typewriter
        .deleteAll(30)
        .changeDelay(100)
        .typeString(service.name.split(" ")[0] + "<br>")
        .typeString(service.name.split(" ")[1])
        .start();
    }
    if (serviceTypewriter) {
      serviceTypewriter
        .callFunction(() => {
          const elements = document.querySelectorAll(
            ".terminal-inner video, .terminal-inner img"
          );
          elements.forEach((el) => el.classList.remove("active"));
        })
        .deleteAll(3)
        .changeDelay(40)
        .typeString("<h2>" + service.name + "</h2>" + "<br><br>")
        .changeDelay(10)
        .typeString("<p>" + service.description + "</p>")
        .callFunction(() => {
          const elements = document.querySelectorAll(
            ".terminal-inner video, .terminal-inner img"
          );
          elements.forEach((el) => el.classList.add("active"));
        })
        .start();
    }

    services.forEach((item, index) => {
      if (item.file === service.file) {
        setActiveIndex(index);
      }
    });
    blurRefs.current.forEach((item) => {
      item.classList.remove("active");
    });
    imageRefs.current.forEach((image, index) => {
      image.style.pointerEvents = "none";
      if (index >= 6) {
        image.style.opacity = "0.5";
      }
    });
    titleRefs.current.forEach((title) => {
      title.classList.remove("opaque");
    });
    setTimeout(() => {
      setService(service);
      titleRefs.current.forEach((title) => {
        title.classList.remove("active");
        void title.offsetWidth;
        title.classList.add("active", "opaque");
      });
    }, 200);
    setTimeout(() => {
      services.forEach((service) => {
        blurRefs.current.forEach((item) => {
          item.classList.remove(service.file);
        });
      });
      blurRefs.current.forEach((item) => {
        item.classList.add(service.file, "active");
      });
    }, 1000);
    setTimeout(() => {
      imageRefs.current.forEach((image, index) => {
        image.style.pointerEvents = "unset";
        if (index >= 6) {
          image.style.opacity = "1";
        }
      });
    }, 3000);
  }

  return (
    <ServiceContext.Provider
      value={{
        service,
        activeIndex,
        blurRefs,
        imageRefs,
        titleRefs,
        typewriterRef,
        serviceTypewriterRef,
        handleTitleChange,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
