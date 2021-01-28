export interface StateInterface {
  ticker: string;
  creator: string;
  balances: {
    [addr: string]: number;
  };
}

export interface ActionInterface {
  input: InputInterface;
  caller: string;
}

export interface InputInterface {
  function: "follow" | "transfer" | "balance";
  target?: string;
  qty?: number;
}

export interface BalanceInterface {
  target: string;
  balance: number;
  ticker: string;
}
