import { StateInterface, ActionInterface, BalanceInterface } from "../faces";

declare const ContractError: any;
declare const SmartWeave: any;

export function handle(
  state: StateInterface,
  action: ActionInterface
): { state: StateInterface } | { result: BalanceInterface } {
  return {
    result: {
      target: "hello",
      balance: 10,
      ticker: "TATE",
    },
  };
}
