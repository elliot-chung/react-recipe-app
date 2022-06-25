declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      CONNECTION_URL: string;
      JWT_SECRET: string;
      RAPID_API_HOST: string;
      RAPID_API_KEY: string;
    }
  }
  namespace Express {
    interface Request {
      user?: {
        name: string;
        email: string;
        id: string;
      };
    }
  }
}

export {};
