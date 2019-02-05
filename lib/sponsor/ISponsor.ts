export interface ISponsor {
  // The sponsor's id
  id: string;
  // The Sponsor's account id.
  accountId: string;
  // What tier the sponsor is.
  tier: number;
  // The sponsor's company
  company: string;
  // The URL that of the contract that was signed with this sponsor
  contractURL: string;
  // The list of IDs of Hackers that this sponsor nominates.
  nominees: string[];
}
