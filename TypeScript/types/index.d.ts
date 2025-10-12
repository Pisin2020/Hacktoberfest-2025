interface ServerError {
  readonly code: string;
  readonly errno: number;
  readonly syscall: string;
  readonly address: string;
  readonly port: number;
}

type ServerHeader = "Content-Type" | "X-Powered-By";

type ServerHeaders = { [K in ServerHeader]: string | number };
