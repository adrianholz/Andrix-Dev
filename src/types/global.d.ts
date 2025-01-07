declare global {
  type Service = {
    name: string;
    short: string;
    file: string;
    description: string;
  };
  type Tags = {
    search: string;
    scale: string[];
    category: string[];
    technology: string[];
  };
}

export {};
