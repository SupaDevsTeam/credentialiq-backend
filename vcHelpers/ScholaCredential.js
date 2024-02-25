module.exports = {
  // VC type: KYCAgeCredential
  // https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld
  ScholaCredential: (credentialSubject) => ({
    id: 1,
    circuitId: "credentialAtomicQuerySigV2",
    query: {
      allowedIssuers: ["*"],
      type: "Schola",
      context:
        "https://raw.githubusercontent.com/SupaDevsTeam/PIDSchemas/main/checkkyc.json-ld",
      // context:
      //   "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld",
      credentialSubject,
    },
  }),
  // See more off-chain examples
  // https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1
};
