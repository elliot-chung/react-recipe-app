declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      CONNECTION_URL: string;
      JWT_SECRET: string;
    }
  }
}

export {};
