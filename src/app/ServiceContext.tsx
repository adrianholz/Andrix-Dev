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
  videoRef: RefObject<HTMLDivElement>;
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
  const videoRef = useRef<HTMLDivElement>(null);

  function handleTitleChange(service: Service) {
    services.forEach((item, index) => {
      if (item.file === service.file) {
        setActiveIndex(index);
      }
    });
    const video = videoRef.current?.children[0] as HTMLVideoElement;
    blurRefs.current.forEach((item) => {
      item.classList.remove("active");
    });
    videoRef.current?.classList.add("active");
    video.play();
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
    }, 2000);
    setTimeout(() => {
      videoRef.current?.classList.remove("active");
    }, 1300);
  }

  return (
    <ServiceContext.Provider
      value={{
        service,
        activeIndex,
        blurRefs,
        imageRefs,
        titleRefs,
        videoRef,
        handleTitleChange,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
