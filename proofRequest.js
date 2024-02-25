const { ScholaCredential } = require("./vcHelpers/ScholaCredential");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Aggregated Marks should be greater than 80%";

const credentialSubject = {
  Marks: {
    $gt: 80,
  },
};

const proofRequest = ScholaCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
