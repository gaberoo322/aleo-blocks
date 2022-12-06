export interface BlockData {
  block_hash: string;
  previous_hash: string;
  header: Header;
  transactions: Transaction[];
  signature: string;
}

export interface Header {
  previous_state_root: string;
  transactions_root: string;
  coinbase_accumulator_point: string;
  metadata: Metadata;
}

export interface Metadata {
  network: number;
  round: number;
  height: number;
  coinbase_target: number;
  proof_target: number;
  last_coinbase_target: number;
  last_coinbase_timestamp: number;
  timestamp: number;
}

export interface Transaction {
  type: string;
  id: string;
  execution: Execution;
}

export interface Execution {
  transitions: Transition[];
  global_state_root: string;
  inclusion: string;
}

export interface Transition {
  id: string;
  program: string;
  function: string;
  inputs: Put[];
  outputs: Put[];
  proof: string;
  tpk: string;
  tcm: string;
  fee: number;
}

export interface Put {
  type: string;
  id: string;
  tag?: string;
  value?: string;
  checksum?: string;
}
