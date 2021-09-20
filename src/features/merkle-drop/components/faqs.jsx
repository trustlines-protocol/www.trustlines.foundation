import React from "react";
import { QuestionMark } from "../../common/components/icons/question-mark";
import { ArrowDownRight } from "../../common/components/icons/arrow-down-right";

const CONTENTS = [
  {
    question: "What is the Trustlines Merkle drop?",
    answer: (
      <div>
        The Trustlines Merkle drop is a token distribution method chosen by the
        Trustlines Foundation for the Trustlines Network Token. You can read
        more about it in this{" "}
        <a href="https://blog.trustlines.network/announcing-the-trustlines-network-token-tln-merkle-drop">
          blog post
        </a>
        .
      </div>
    ),
  },
  {
    question: "Why did you choose a Merkle drop?",
    answer: (
      <div>
        <p>
          The Trustlines Foundation designed the distribution method based on
          the idea of{" "}
          <a href="https://medium.com/@DJohnstonEC/the-smartdrop-model-859888916d94">
            smart drops
          </a>
          .
        </p>

        <p>The Merkle drop is used as a tool to</p>

        <ul>
          <li>
            Reward early contributors, e.g. validators, testers, and developers
          </li>
          <li>
            Target potential stakeholders of the Trustlines Network, e.g.
            individuals/ projects aligned with the mission of Trustlines, who
            may turn into users of the Trustlines Protocol
          </li>
          <li>
            Make TLC available to a wide audience consisting of addresses and
            individuals from within the crypto and alternative currency
            ecosystems by providing them with TLN that they can convert into TLC
            via the bridge
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can someone have multiple allocations of TLN?",
    answer: (
      <div>
        <p>Yes. There are two ways in which this could happen.</p>
        <ul>
          <li>
            You happen to control the private key of multiple eligible Ethereum
            addresses.
          </li>
          <li>
            One or more of your eligible Ethereum addresses fit into more than
            one group of Merkle drop receivers.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Can I claim tokens for a different address than the one I’m signing with?",
    answer: "No, the signing address must also be the eligible address.",
  },
  {
    question:
      "How much of the Total supply of TLN is in the first Merkle drop?",
    answer: "50% with up to another 20% scheduled for future distribution.",
  },
  {
    question: "Which addresses are included in the Merkle drop?",
    answer: (
      <div>
        <p>
          These are the groups of eligible addresses that can now claim their
          TLN.
        </p>
        <ul>
          <li>
            Early contributors to the{" "}
            <a href="https://trustlines.network/" target="_blank">
              Trustlines Network
            </a>{" "}
            ecosystem. This includes, for example, testers and{" "}
            <a
              href="https://explore.laika.trustlines.foundation/"
              target="_blank"
            >
              testnet
            </a>{" "}
            validatorsas well as those who whitelisted their address to become
            validators, but did not secure a slot in the{" "}
            <a href="auction/">auction</a>.
          </li>
          <li>
            People who were interested in participating in the drop via{" "}
            <a
              href="https://twitter.com/TrustlinesFound/status/1201901024576987137"
              target="_blank"
            >
              our community channels
            </a>
          </li>
          <li>
            <a href="https://ethberlinzwei.com/" target="_blank">
              ETHBerlin2
            </a>{" "}
            hackers
          </li>
          <li>
            Addresses included in the Genesis block of{" "}
            <a href="https://ethereum.org/" target="_blank">
              Ethereum
            </a>{" "}
            (with at least one transfer executed)
          </li>
          <li>
            <a href="https://makerdao.com/" target="_blank">
              Maker (MKR)
            </a>
            ,{" "}
            <a href="https://www.bancor.network/" target="_blank">
              Bancor (BNT)
            </a>{" "}
            and{" "}
            <a href="https://makerdao.com/" target="_blank">
              DAI
            </a>{" "}
            token holders
          </li>
          <li>
            <a
              href="https://blog.gnosis.pm/the-dxdao-has-awoken-78cb2e39661c"
              target="_blank"
            >
              dxDAO
            </a>{" "}
            Rep holders and{" "}
            <a href="https://www.humanitydao.org/" target="_blank">
              HumanityDAO
            </a>{" "}
            human participants
          </li>
          <li>
            <a href="https://www.poap.xyz/" target="_blank">
              POAP
            </a>
            , Proof-of-Attendance NFT holders
          </li>
          <li>
            Collection of ETH addresses, that underwent some form of identity
            verification in the past
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What can I do with my TLN?",
    answer: (
      <div>
        TLN is an ERC20 token that can be transferred or be converted to TLC by
        sending them to the Trustlines Blockchain{" "}
        <a href="https://etherscan.io/address/0x18BDC736b23Ff7294BED9fa988a1443357C7B0ed">
          bridge contract
        </a>{" "}
        on Ethereum.
      </div>
    ),
  },
  {
    question: "Are Trustlines Network Tokens, TLN, freely transferable?",
    answer: "Yes, TLN is an ERC20 token on Ethereum.",
  },
  {
    question: "Are Trustlines Network Coins, TLC, freely transferable?",
    answer: "Yes. You can transfer TLC freely on Trustlines Blockchain.",
  },
  {
    question: "When can people actually use the Trustlines Blockchain?",
    answer: (
      <div>
        The{" "}
        <a href="https://explore.tlbc.trustlines.foundation/">
          Trustlines Blockchain
        </a>{" "}
        went live November 21st and since then people have been building use
        cases for the blockchain.
      </div>
    ),
  },
  {
    question: "When does the Merkle drop end?",
    answer:
      "The ineligibility of all Ethereum addresses, who have not claimed their tokens, will happen on December 31st, 2021, at 10:59 pm (UTC).",
  },
  {
    question: "Does the amount I’m able to claim decay at some point?",
    answer:
      "Yes. The tokens people are entitled to will begin to decay linearly over two years starting from 31.12.2019 at 23:59 CET.",
  },
  {
    question:
      "If I provided an Ethereum address for the Merkle drop or think I’m included in the receiver list, am I being sent TLN automatically?",
    answer: (
      <div>
        No. You must submit a Merkle proof from an eligible Ethereum address by
        yourself. Check{" "}
        <a href="https://www.youtube.com/watch?v=bHLYpZstZKs">this tutorial</a>{" "}
        for a quick introduction on how to do so.
      </div>
    ),
  },
  {
    question: "How does the Merkle drop work?",
    answer: (
      <div>
        <p>
          The Merkle drop is a smart contract deployed on the{" "}
          <a href="https://ethereum.org/" target="_blank">
            Ethereum blockchain
          </a>{" "}
          that contains{" "}
          <a
            href="https://github.com/trustlines-protocol/merkle-drop-data"
            target="_blank"
          >
            a list of addresses
          </a>{" "}
          and claimable Trustlines Network Tokens per address in the form of a{" "}
          <a href="https://en.wikipedia.org/wiki/Merkle_tree" target="_blank">
            Merkle root
          </a>
          . People can provide a proof to this contract and withdraw tokens they
          are entitled to. <a href="index.html">The Trustlines Foundation</a>{" "}
          has a web service that allows people to either claim their tokens via
          a web3 integration (e.g. Metamask) or calculate the needed proof. Once
          the proof has been created and eligibility established, it can be
          submitted to the{" "}
          <a
            href="https://etherscan.io/address/0x0a6f0c541be542c098b7ee03c9c634f20bcf8422"
            target="_blank"
          >
            Merkle drop smart contract
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    question:
      "Do I have to use the Trustlines Foundation’s website to claim TLN?",
    answer: (
      <div>
        No, you can produce your own proof for the Merkle drop. The logic behind
        the creation of the Merkle tree is{" "}
        <a href="https://github.com/trustlines-protocol/merkle-drop/blob/master/contracts/contracts/MerkleDrop.sol">
          public
        </a>{" "}
        so that anyone can construct the proof for themselves.
      </div>
    ),
  },
];

export function MerkleDropFaqs() {
  return (
    <section>
      <div className="container mx-auto px-4 py-32 merkle-drop-faq">
        <div>
          <div>
            <h1 className="text-5xl leading-tight my-8 mx-20 font-semibold text-rich-black">
              Merkle Drop FAQ
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col w-1/2">
            {CONTENTS.map((content, i) => (
              <div className="mb-12">
                <div className="flex flex-row items-center py-8">
                  <div className="mr-4">
                    <QuestionMark width="32" height="32" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {content.question} <button className="text-2xl">↑</button>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="px-4">
                    <ArrowDownRight />
                  </div>
                  <div className="pl-8 text-grey text-lg">{content.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
