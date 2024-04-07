require('dotenv').config();
const { ethers } = require('ethers');

async function main() {
  const provider = ethers.getDefaultProvider(process.env.API_URL);

  // Read the artifact

  const VotingFactory = new ethers.ContractFactory(VotingArtifact.abi, VotingArtifact.bytecode, provider);
  const Voting_ = await VotingFactory.deploy(["Mark", "Mike", "Henry", "Rock"], 90);
  await Voting_.deployed();

  console.log("Contract deployed to:", Voting_.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
