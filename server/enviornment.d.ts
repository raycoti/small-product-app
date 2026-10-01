declare namespace NodeJS {
  interface ProcessEnv {
    HOST: string;
    USER: string;
    DB: string;
    DIALECT: string;
    PORT: number;
  }
}
