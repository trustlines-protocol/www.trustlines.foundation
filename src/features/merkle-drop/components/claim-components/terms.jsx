import React from "react";

function TermsAndConditionsParagraph(props) {
  /*
   * This is a copy of the src/view/merkle_drop/_terms-conditions.njk template.
   * As long as there is no smarter solution implemented, these both files must
   * be kept in sync with each other!
   */
  return (
    <div className="terms-and-conditions">
      <h1>Background</h1>

      <h2>The Merkle Drop and the role of the Foundation</h2>

      <p>
        The Trustlines Blockchain is a public blockchain for applications that
        share the overall Trustlines vision of creating decentralized p2p use
        cases based on networks of mutual-trust. This blockchain requires a
        native coin, the Trustlines Network Coin (TLC), analogous to Bitcoin or
        Ether in Ethereum, which will be used by those interacting with the
        blockchain as a means of payment to the Validators for validating their
        transactions/interactions on the Trustlines Blockchain.
      </p>

      <p>
        To distribute TLC, Trustlines Network Tokens (TLN) will be created and
        made available to Eligible Parties via the Ethereum Mainchain through
        different distribution methods. Initially however via the Merkle Drop.
        The Ethereum Mainchain was chosen for this due to interoperability with
        the Trustlines Blockchain and because the already existing Ethereum
        address balances and information on the Ethereum Mainchain make the
        chosen Eligible Party selection methodology possible. Once Claimed from
        the Merkle Drop Smart Contract, the TLN will be able to be converted to
        TLC on the Trustlines Blockchain using the Trustlines Bridge.
      </p>

      <h2>The Trustlines Foundation’s role in this process comprises</h2>

      <ul>
        <li>
          The organisation of the creation of the Contracts and related software
          components;
        </li>
        <li>
          The selection of Eligible Parties and determining their respective
          allocation of TLN;
        </li>
        <li>The collection of Ethereum addresses from the Eligible Parties;</li>
        <li>The deployment of the Contracts; and</li>
        <li>
          The organisation of the creation, and deployment of the Trustlines
          Bridge.
        </li>
      </ul>

      <h1>How the Merkle Drop works</h1>

      <h2>In General</h2>

      <p>
        To make Trustlines Network Tokens (TLN) available for Eligible Parties
        to Claim, a Merkle drop model was chosen as the first distribution
        method. Merkle drops (or merkle mines) are a variant of air drops or
        smart drops, in which tokens are not actively sent or transferred to the
        intended recipients, but are made available so that the tokens may be
        claimed by a predetermined group is they so desire. In the case of the
        Merkle Drop, a Smart Contract containing a Merkle root is deployed on
        the Ethereum Mainchain, from which an Eligible Party can Claim their TLN
        allocation using an on-chain transaction which provides a Merkle Proof
        to the Merkle Drop Smart Contract allowing them to Claim their allocated
        TLN. This method allows Eligible Parties to Claim their allocated TLN
        without the need of any action by the Foundation or any third party.
        Once the Merkle Drop Smart Contract is deployed, neither the Foundation
        nor any other party will have control over the Merkle Drop Smart
        Contract, thereby ensuring that no changes can be made to the list of
        Eligible Parties and/or the allocated TLN.
      </p>

      <h2>
        Creation of the Merkle Root for the Merkle Drop Smart Contract and its
        deployment
      </h2>

      <p>
        Merkle trees are used to validate large amounts of data in an efficient
        way by combining multiple values and their hashes in a single fixed-size
        value - a Merkle root. In the case at hand, the Foundation will use the
        Eligible Party Ethereum addresses and their respective TLN allocation
        (see Eligible Party selection methodology) to create a Merkle Tree and
        include its Merkle Root into the Merkle Drop Smart Contract which it
        will deploy on the Ethereum Mainchain.
      </p>

      <h2>Claiming tokens from the Merkle Drop Smart Contract</h2>

      <p>
        Merkle proofs are a way to provide proof that a certain value is part of
        a set of data without the need of exposing the complete set of data.
        More specifically, in the Merkle Drop, a Merkle Proof that a Ethereum
        address is included within the Merkle Root of the Merkle Drop Smart
        Contract needs to be provided to the Merkle Drop Smart Contract in order
        for an Eligible Party to Claim its allocated TLN.
      </p>

      <p>
        <strong>Step1</strong> - confirming if an Ethereum address is an
        Eligible Party Ethereum address: open the&nbsp;
        <a href="https://trustlines.foundation/merkle-drop.html">Merkle Drop</a>
        &nbsp; and enter the Ethereum address that you want to check. If the
        Ethereum address is an Eligible Party Ethereum address, the Merkle Proof
        will automatically be generated. If the Ethereum address is not an
        Eligible Party Ethereum address a corresponding notification will be
        presented.
      </p>

      <p>
        <strong>Step 2</strong> - Submitting the Merkle Proof to the Merkle Drop
        Smart Contract: you will be able to Claim TLN directly through the&nbsp;
        <a href="https://trustlines.foundation/merkle-drop.html">Merkle Drop</a>
        &nbsp; by using a web3 provider such as Metamask. If a Merkle Proof is
        successfully generated, the website will interact with the web3 provider
        and initiate the creation of a transaction to Claim the TLN. By clicking
        the respective claim button and approving the transaction, the Merkle
        Drop Smart Contract is instructed to transfer the maximum amount of
        Claimable TLN to the Eligible Party Ethereum address.
      </p>

      <h3>Warnings and recommendations</h3>
      <ul>
        <li>
          Note that a Claiming transaction can only be signed by the Ethereum
          address of an Eligible Party Ethereum address.
        </li>
        <li>
          Note you will need to have sufficient ETH to pay for the transaction
          to be processed on the Ethereum Mainchain.
        </li>
        <li>
          No guarantee is given with regard to the proper functioning of the
          web3 provider, the Merkle Drop Website or the integration of each of
          these.
        </li>
      </ul>

      <p>
        To ensure future economics of the Trustlines Blockchain Claiming TLN
        will only be possible within 2 years starting from the deployment of the
        Merkle Drop Smart Contract. To incentivize early adoption, the amount of
        Claimable allocated TLN will decrease linearly over these 2 years.
        Non-Claimable TLN will be rendered unusable.
      </p>

      <h1>The TLN and TLC</h1>

      <h2>The Trustlines Network Token (TLN)</h2>

      <p>
        The Trustlines Network Token (TLN) is an ERC-20 token on the Ethereum
        Mainchain. It is envisaged to be able to be converted via the Trustlines
        Bridge to Trustlines Network Coins (TLC), which are the native tokens of
        the Trustlines Blockchain.
      </p>

      <p>
        The TLN is&nbsp;
        <a href="https://etherscan.io/token/0x679131F591B4f369acB8cd8c51E68596806c3916">
          deployed
        </a>
        &nbsp; via a smart contract on the Ethereum Mainchain and has the
        following token specifications:
      </p>

      <table>
        <tbody>
          <tr>
            <td>Type of smart contract standard</td>
            <td>
              <a href="https://en.wikipedia.org/wiki/ERC-20">ERC20</a>
            </td>
          </tr>
          <tr>
            <td>Quantity of tokens</td>
            <td>80 Million</td>
          </tr>
          <tr>
            <td>Decimals</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>TLN</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Trustlines Network Token</td>
          </tr>
        </tbody>
      </table>

      <p>
        A link to the relevant smart contract can be found&nbsp;
        <a href="https://etherscan.io/token/0x679131F591B4f369acB8cd8c51E68596806c3916">
          here.
        </a>
        &nbsp;
      </p>

      <h2>Trustlines Network Coin (TLC)</h2>

      <p>
        Since the Ethereum Mainchain and the Trustlines Blockchain have no
        direct connection with each other, the Foundation has deployed the&nbsp;
        <a href="https://etherscan.io/address/0x18bdc736b23ff7294bed9fa988a1443357c7b0ed">
          Trustlines Bridge
        </a>
        . The Trustlines Bridge registers if someone wishes to convert TLN to
        TLC on the Trustlines Blockchain. Once such an event is registered in
        the Trustlines Bridge and validated by at least 50% of the then active
        Validators, the person will receive the same amount of TLC on the
        Trustlines Blockchain.
        <br />
        The Trustlines Bridge will hold the same quantity of TLC as there are
        TLN so that it can be ensured that all TLN can be converted to TLC on
        the Trustlines Blockchain.
      </p>

      <p>
        At the start of the Trustlines Blockchain a total of 80,000,000 TLC were
        pre-mined and deposited into the&nbsp;
        <a href="https://explore.tlbc.trustlines.foundation/address/0x0000000000000000000000000000000000000401/transactions">
          Trustlines Bridge contract
        </a>
        &nbsp; deployed on the Trustlines Blockchain. In addition to the
        pre-mined coins 3 new TLC are created in the form of a block reward
        after each block is created by a Validator.
      </p>

      <h2>Use of the TLN and TLC</h2>

      <p>
        As previously stated, the Trustlines Blockchain requires a native coin,
        the TLC, analogous to Bitcoin or Ethereum in Ethereum, which will be
        used by those interacting with the Trustlines Blockchain as a means of
        payment to the Validators for validating their transactions/interactions
        on the Trustlines Blockchain.
      </p>

      <h1>Eligible Party selection methodology</h1>

      <h2>Goal </h2>

      <p>
        By making TLN available to a wide range of Eligible Party Ethereum
        addresses, the Foundation hopes to foster adoption of the Trustlines
        Blockchain by lowering one of the initial adoption hurdles, i.e. the
        need to acquire the means to pay for transactions fees on the Trustlines
        Blockchain. The predetermined Eligible Party Ethereum addresses fall
        into 3 categories and were selected based on a set of criteria that
        indicate an increased likelihood of use of the Trustlines Blockchain by
        the Ethereum address owner.
      </p>

      <table>
        <tbody>
          <tr>
            <td>Retained by Foundation</td>
            <td>30%</td>
          </tr>
          <tr>
            <td>Reserved for future token distribution methods</td>
            <td>Min 20%</td>
          </tr>
          <tr>
            <td>Early contributors and potential future stakeholders</td>
            <td>Max 30%</td>
          </tr>
          <tr>
            <td>Wide target audience</td>
            <td>Min 20%</td>
          </tr>
        </tbody>
      </table>

      <h3>Groups of Eligible Parties</h3>

      <p>
        The Foundation has identified 3 groups of Ethereum addresses with an
        increased likelihood of adopting / using the Trustlines Blockchain:
      </p>

      <ol>
        <li>
          Addresses belonging to entities, individuals or groups of individuals
          who have either contributed to the Trustlines Network Ecosystem in the
          past (early contributors);
        </li>
        <li>
          Ethereum addresses belonging to entities, individuals or groups of
          individuals who are likely to contribute in the future (potential
          future stakeholders); and
        </li>
        <li>
          Addresses belonging to entities, individuals or groups of individuals
          who have participated in TGEs/ICOs in the past (wider target
          audience).
        </li>
      </ol>

      <p>
        Within each group, the Foundation has applied additional criteria which
        it deemed suitable and reasonable to include or exclude Ethereum
        addresses from the final list of Eligible Party Ethereum addresses.
      </p>

      <h3>Early contributors</h3>

      <p>The group of early contributors is composed of among others:</p>

      <ul>
        <li>
          <strong>Laika testnet Validators and Validator Candidates;</strong>
        </li>
        <li>
          <strong>Directly contributing developers</strong>: entities,
          individuals or groups of individuals who are or have been actively
          developing around the code base of the Trustlines Protocol or directly
          related software components;
        </li>
        <li>
          <strong>Indirectly contributing developers</strong>: entities,
          individuals or groups of individuals who are or have been developing
          on open source projects or code, of which substantial components were
          used in the development of the Trustlines Protocol codebase;
        </li>
        <li>
          <strong>Advisors:</strong> entities, individuals or groups of
          individuals who gave technical or strategic advice or helped out in
          similar, non-tangible ways;
        </li>
        <li>
          <strong>Testers:</strong> entities, individuals or groups of
          individuals who tested parts of the code base of the Trustlines
          Protocol or directly related software components.
        </li>
      </ul>

      <h3>Potential future stakeholders</h3>

      <p>
        The group of potential future stakeholders is composed of among others:
      </p>

      <ul>
        <li>
          <strong>
            Entities, individuals or groups of individuals with an aligned
            vision/mission:
          </strong>
          projects or members of projects, which are working towards a similar
          goal or have a similar purpose as the Foundation and are as such seen
          to potentially contribute or become stakeholders of the Trustlines
          Ecosystem in the future.
        </li>
        <li>
          <strong>
            Entities, individuals or groups of individuals which develop
            software components that Trustlines is built on top of:
          </strong>
          projects or members of projects, which have been developing software
          which is used within the Trustlines Protocol or that has/will
          benefit(ted) the Trustlines Protocol in a significant way.
        </li>
        <li>
          <strong>Potential future users:</strong> people who are deemed likely
          to become future users of any of the components of the Trustlines
          technology stack why can be identified with other means than the
          methodology used for the wider target audience as described below. An
          example of this would be if they have shown interest in Trustlines
          technology, i.e. by following or contributing to the Trustlines Github
          repositories or social media..
        </li>
      </ul>

      <h3>Wider target audience</h3>

      <p>
        Besides early contributors and potential stakeholders (as described
        above), the Foundation considered 2 additional sub-groups having an
        increased likelihood of becoming a future Trustlines Ecosystem
        participant:
      </p>

      <ol>
        <li>
          Entities, individuals or groups of individuals who have participated
          in TGEs/ICOs (which has announced some form of ID verification
          process) in the past; and
        </li>
        <li>
          A subset of entities, individuals or groups of individuals from a
          group of approximately 1M Twitter-accounts that are within two hops
          (friends-of-friends-of-friends) of roughly 20 Twitter-anchor accounts.
          The Twitter-anchor accounts were chosen based on their owner’s
          subjective trustworthiness as well as their good public reputation
          within the general Ethereum community.
        </li>
      </ol>

      <h1>Definitions</h1>

      <p>
        <strong>Ethereum Mainchain or Ethereum Blockchain</strong> means the
        smart contract protocol, virtual machine and decentralized network
        including all its related components and protocol-related projects both
        present and future, which began operation (Genesis Block) on July 30th,
        2015.
      </p>

      <p>
        <strong>Ether (ETH)</strong> means the cryptocurrency native to the
        Ethereum Mainchain, i.e. the blockchain token of Ethereum.
      </p>

      <p>
        <strong>Trustlines Network</strong> is short for “The Trustlines Network
        ecosystem”, which is an ecosystem of entities, individuals,
        organisations and code that aims to promote financial &amp;qeconomic
        inclusion of all people through decentralized and open source systems.
      </p>

      <p>
        <strong>Trustlines Protocol</strong> represents a set of rules,
        processes and definitions translated into deployable code that forms
        part of the Trustlines Network. It will, amongst others, comprise
        several technical components used to calculate paths and store
        transactions, i.e. smart contracts, the Trustlines Blockchain and the
        code for the relay servers. It aims to provide a base layer to enable
        interactions within the Trustlines Network.
      </p>

      <p>
        <strong>Trustlines Blockchain</strong> means a purpose built Side-Chain
        to the Ethereum Mainchain that is intended to serve as a database and
        storage for transactions to support implementations of the Trustlines
        Protocol.
      </p>

      <p>
        <strong>Foundation</strong> means the Trustlines Foundation, a
        Liechtenstein non-profit foundation registered in Ruggell,
        Liechtenstein.
      </p>

      <p>
        <strong>Side-Chain</strong> means a designation for a blockchain that
        runs in parallel to a primary blockchain. Entries from the primary
        blockchain can be linked to and from the Side-Chain; this allows the
        Side-Chain to otherwise operate independently of the primary blockchain.
      </p>

      <p>
        <strong>Terms</strong> mean these terms and conditions forming the
        Agreement between you, the Eligible Party and the Foundation.
      </p>

      <p>
        <strong>Disputes</strong> means any dispute, claim, suit, action, cause
        of action, demand or proceeding arising out or in connection with these
        Terms, or the breach, termination or invalidity thereof.
      </p>

      <p>
        <strong>Trustlines Bridge</strong> means a combination of one&nbsp;
        <a href="https://etherscan.io/address/0x18bdc736b23ff7294bed9fa988a1443357c7b0ed">
          smart contract
        </a>
        &nbsp; deployed on the Ethereum Mainchain, one&nbsp;
        <a href="https://explore.tlbc.trustlines.foundation/address/0x0000000000000000000000000000000000000401/transactions">
          smart contract
        </a>
        &nbsp; deployed on the Trustlines Blockchain and a monitoring tool that
        runs on the Validator nodes. It allows for the mono directional
        conversion of Trustlines Network Token from the Ethereum Mainchain into
        the Trustlines Blockchain as native Trustlines Network Coins.
      </p>

      <p>
        <a href="https://github.com/trustlines-protocol/blockchain/blob/master/contracts/contracts/token/TrustlinesNetworkToken.sol">
          <strong>Trustlines Network Tokens (TLN)</strong>
        </a>
        &nbsp; means tokens within the ERC20 TLN&nbsp;
        <a href="https://etherscan.io/token/0x679131F591B4f369acB8cd8c51E68596806c3916">
          token contract
        </a>
        &nbsp; on the Ethereum Mainchain, which can be converted to TLC by
        sending them to the Trustlines Bridge.
      </p>

      <p>
        <strong>Trustlines Network Coins (TLC)</strong> means the native
        cryptocurrency of the Truslines Blockchain.
      </p>

      <p>
        <strong>Smart Contract(s)</strong> means a computer protocol intended to
        digitally facilitate, verify, or enforce the negotiation or performance
        of a contract. Smart contracts allow the performance of credible
        transactions without third parties.
      </p>

      <p>
        <strong>Contracts</strong> means the specific smart contracts used for
        this Merkle Drop and the Trustlines Bridge.
      </p>

      <p>
        <strong>Merkle Tree</strong> means the merkle tree including the
        Eligible Party Ethereum addresses and their respective TLN allocation
        forming the basis of the Merkle Root.
      </p>

      <p>
        <strong>Merkle Proof</strong> means a merkle proof that an Address is
        included within the Merkle Root of the Merkle Drop Smart Contract.
      </p>

      <p>
        <strong>Merkle Drop</strong> means the merkle drop organised by the
        Trustlines Foundation and being the mechanism for Eligible Parties to
        Claim TLN.
      </p>

      <p>
        <strong>Eligible Party</strong> means an entity, individual or groups of
        individuals who own an Ethereum address that is included in the Merkle
        Tree and is therefore able to Claim TLN in the Merkle Drop.
      </p>

      <p>
        <strong>Validator means</strong> an entity, individual or groups of
        individuals who or which has deployed and operates the Trustlines
        Blockchain client in order to validate and relay transactions on the
        Trustlines Blockchain and is part of the current Validator Set.
      </p>

      <p>
        <strong>Validator Candidate</strong> means entity, individual or groups
        of individuals whose Ethereum address which he/she/it has provided to
        the Foundation and has been whitelisted in the first validator auction
        smart contract by the Foundation in order to take part in the first
        Trustlines Validator auction.
      </p>

      <p>
        <strong>Claiming</strong> means sending a transaction to the Merkle Drop
        Smart Contract that initiates a transfer of TLN as described in the
        section “Claiming tokens from the Merkle Drop Smart Contract” in this
        document.
      </p>

      <p>
        <strong>Affiliate(s)</strong> means any and all persons and or entities
        directly or indirectly controlling, controlled by or under common
        control with such person, where control may be by either management
        authority, contract or equity interest.
      </p>

      <p>
        <strong>Merkle Drop Smart Contract</strong> means the Smart Contract
        deployed by the Foundation on the Ethereum Mainchain with the purpose of
        providing a mechanism for Eligible Parties to Claim TLN.
      </p>

      <p>
        <strong>Party/Parties</strong> means an Eligible Party Claiming TLN
        and/or the Foundation as the case may be.
      </p>

      <p>
        <strong>Public Key</strong> means on Ethereum, the public key derived
        cryptographically from a corresponding private key, which is used for
        authentication purposes on Ethereum.
      </p>

      <p>
        <strong>Address</strong> means a representation of an Ethereum Mainchain
        account, e.g. to hold ETH or other tokens in Ethereum. It is derived
        cryptographically from the Public Key.
      </p>

      <h1>Acceptance of terms and conditions</h1>

      <p>
        By Claiming TLN from the Merkle Drop Smart Contract, you accept and are
        subject to these terms and conditions.
      </p>

      <h2>Representations and warranties of the Merkle Drop participant</h2>

      <p>
        By Claiming TLN from the Merkle Drop Smart Contract, the Eligible Party
        represents and warrants that:
      </p>

      <ol>
        <li>
          Claiming TLN from the Merkle Drop Smart Contract and all your other
          actions related to the Merkle Drop are voluntary, there is no
          obligation to take part in the Merkle Drop.
        </li>
        <li>You have read, understand and accept these Terms;</li>
        <li>
          You understand the restrictions and risks associated with the Merkle
          Drop as set forth in these Terms, and acknowledge and assume all such
          restrictions and risks;
        </li>
        <li>
          You have a sufficient understanding of the functionality, usage,
          storage, transmission mechanisms and intricacies associated with
          cryptographic tokens and blockchain-based software systems;
        </li>
        <li>
          You have obtained sufficient information about the Trustlines
          Protocol, the Trustlines Network, the Merkle Drop, the TLN and TLC,
          the Trustlines Blockchain and the Foundation to make an informed
          decision whether or not to claim TLN from the Merkle Drop Smart
          Contract;
        </li>
        <li>
          You understand and accept that none of the information contained in
          these Terms is intended to form the basis for a solicitation or
          recommendation for an investment of any kind whatsoever;
        </li>
        <li>
          You understand and accept that you waive your rights to have any
          Dispute resolved in a court, and that you waive your rights to a jury
          trial. Instead, any Disputes will be settled through amicable
          negotiations and/or through binding arbitration.
        </li>
        <li>
          You are not registered on any of the following sanction lists; United
          Nations Sanctions (UN), US Consolidated Sanctions OFAC, Specially
          Designated Nationals (SDN), EU Financial Sanctions, UK Financial
          Sanctions (HMT), Australian Sanctions, Switzerland Sanction List -
          SECO, INTERPOL Wanted List, Consolidated Canadian Autonomous Sanctions
          List, Office of the Superintendent of Financial Institutions (Canada),
          Bureau of Industry and Security (US), Department of State, AECA
          Debarred List (US), Department of State, Nonproliferation Sanctions
          (US), or any other internationally recognised sanction list.
        </li>
        <li>
          Any and all of your actions, whether directly or indirectly related to
          the Merkle Drop, the TLN and TLC and the Trustlines Protocol comply
          with applicable laws and regulations in your jurisdiction, including,
          but not limited to, (i) legal capacity and any other threshold
          requirements in your jurisdiction (ii) and any foreign exchange or
          regulatory restrictions applicable to such actions.
        </li>
      </ol>

      <h2>Review and testing of the Smart Contracts </h2>

      <p>
        The Merkle Drop Smart Contract, the Trustlines Network Token Smart
        Contract and the Trustlines Bridge Smart Contracts (together the
        “Contracts”) have been, on a reasonable effort basis, reviewed, tested
        and approved by technical experts. The technical experts have confirmed
        to the Foundation that the Contracts have, with regard to both accuracy
        and security, been programmed according to the current state of the art.
        The Eligible Party however, understands and accepts that smart contract
        technology is still in an early development stage and its application is
        of an experimental nature which carries significant operational,
        technological, financial, regulatory and reputational risks.
        Accordingly, while the conducted review and testing raises the level of
        security and accuracy, in theory, the Eligible Party understands and
        accepts that the review and testing does not amount to any form of
        warranty, including direct or indirect warranties that the Contracts are
        fit for a particular purpose or do not contain any weaknesses,
        vulnerabilities or bugs which could cause, inter alia, the complete loss
        of the TLN or TLC or your ETH.
      </p>

      <h2>Associated risks</h2>

      <p>
        By Claiming TLN from the Merkle Drop Smart Contract, you expressly
        acknowledge and assume the following risks:
      </p>
      <ul>
        <li>
          Risk of losing ETH, TLN, TLC or other tokens due to loss of private
          key(s);
        </li>
        <li>
          Risks associated with the Ethereum blockchain: any malfunction,
          breakdown or abandonment of the Ethereum blockchain may have a
          material adverse effect on the Contracts;
        </li>
        <li>
          Risk of mining attacks: the Contracts are susceptible to attacks by
          miners on the Ethereum blockchain, including, but not limited, to
          double-spend attacks, majority mining power attacks, and
          selfish-mining attacks. Any successful attacks present a risk to the
          Merkle Drop;
        </li>
        <li>
          Risk of hacking and security weaknesses: hackers or other malicious
          groups or organizations may attempt to interfere with the Merkle Drop
          in a variety of ways, including, but not limited to, malware attacks,
          denial of service attacks, consensus-based attacks, Sybil attacks,
          smurfing, and spoofing;
        </li>
        <li>
          Risk of uninsured Losses: unlike bank accounts or accounts at
          financial institutions, the TLN held in the Contracts is uninsured
          unless you specifically obtain private insurance to insure them. Thus,
          in the event of loss or loss of utility value, there is no public
          insurer or private insurance arranged by the Foundation, to offer
          recourse to you;
        </li>
        <li>
          Risks associated with uncertain regulations and enforcement actions:
          the regulatory status of, including but not limited to the Merkle
          Drop, the TLN and TLC, and distributed ledger technology is unclear or
          unsettled in many jurisdictions. It is difficult to predict how or
          whether regulatory agencies may apply existing regulation with respect
          to such technology and its applications. It is likewise difficult to
          predict how or whether legislatures or regulatory agencies may
          implement changes to law and regulations affecting distributed ledger
          technology and its applications, including but not limited to the
          Merkle Drop and the TLN and TLC. Regulatory actions could negatively
          impact the whole Trustlines Protocol in various ways, including, for
          purposes of illustration only, that some or all of the parties
          involved in the Trustlines Protocol in general might require licensing
          or is subject to existing licensing requirements;
        </li>
        <li>
          Risks arising from taxation; the tax characterization of the Merkle
          Drop, claiming TLN and of TLN and TLC in general is uncertain. You
          must seek your own tax advice before Claiming TLN from the Merkle Drop
          Smart Contract, which may result in adverse tax consequences to you,
          including but not limited to withholding taxes, income taxes and tax
          reporting requirements.
        </li>
        <li>
          Unanticipated risks: blockchain technology and the Trustlines Protocol
          are a new and untested technology. In addition to the risks referred
          to above, there are other risks associated with the Merkle Drop,
          including unanticipated risks. Such risks may further materialize as
          unanticipated variations or combinations of the risks previously
          referred to.
        </li>
      </ul>

      <h2>Indemnification</h2>

      <p>
        To the fullest extent permitted by applicable law, you will indemnify,
        defend and hold harmless the Foundation and its Affiliates from and
        against all claims, demands, actions, damages, losses, costs and
        expenses (including attorneys’ fees) that arise from or relate to (i)
        you participating in the Merkle drop; (ii) your obligations,
        representations and warranties under these Terms, (iii) your violation
        of these Terms, and/or (iv) your violation of any rights of any other
        person or entity directly and indirectly related to the Merkle drop.
      </p>

      <h2>Exclusion of Warranties</h2>

      <p>
        To the full extent permitted by law, no warranty, guarantee or similar
        assurance whatsoever is expressed or implied with regard to the
        Trustlines Protocol and its components. The Contracts are used at the
        sole risk of the user (users including but not limited to Eligible
        Parties) and on an ‘as is’, ‘under development’ and ‘as available’
        basis.
        <br />
        Being an Eligible Party in the Merkle Drop and agreeing to these Terms
        does neither entail a right nor an entitlement in any way whatsoever to
        receiving TLN or TLC.
      </p>

      <h2>No Reliance</h2>

      <p>
        You, the Eligible Party has had an opportunity to (i) review these
        Terms, (ii) ask questions and receive answers from the Foundation
        concerning these Terms and the Merkle Drop, and (iii) obtain any
        additional information concerning the Merkle Drop, the Contracts and the
        Foundation to the extent necessary for in order to make an informed
        decision to enter into these Terms and to Claim TLN from the Merkle Drop
        Smart Contract. The Eligible Party acknowledges that in making a
        decision to Claim TLN from the Merkle Drop Smart Contract, the Eligible
        Party has relied solely upon these Terms and independent investigations
        made by the Eligible Party. The Eligible Party is not relying on the
        Foundation with respect to the legal, tax and general economic factors
        involved in entering into these Terms and understands that it is solely
        responsible for reviewing the legal, tax and general economic
        considerations involved with Claiming TLN from the Merkle Drop Smart
        Contract with its own legal, tax and other advisers.
      </p>

      <h2>Limitation of Liability</h2>

      <p>
        The Eligible Party acknowledges and agrees that, to the fullest extent
        permitted by any applicable law, it will not hold the Foundation and any
        of its Affiliates liable for any direct, indirect, special, incidental,
        consequential or exemplary damages (including but not limited to loss of
        income, revenue and profits, or goodwill, or data) or injury whatsoever
        caused by or related to his/her partaking (or inability to partake) in
        the Merkle Drop or the use (or inability to use) of the Contracts under
        any cause of action whatsoever of any kind in any jurisdiction.
        <br />
        The Eligible Party acknowledges and agrees that, to the fullest extent
        permitted by any applicable law, the risks associated with Claiming TLN
        from the Merkle Drop Smart Contract, owning and holding TLN rests
        entirely with the Eligible Party.
        <br />
        The limitations set forth in the Clause do not and will not limit or
        exclude liability of the Foundation for fraud or intentional, willful or
        reckless misconduct.
      </p>

      <h2>Release</h2>

      <p>
        To the fullest extent permitted by applicable law, the Merkle Drop
        participant releases the Foundation and its Affiliates from
        responsibility, liability, claims, demands and/or damages (actual and
        consequential) of every kind and nature, known and unknown (including,
        but not limited to, claims of negligence), arising out of or related to
        Disputes between the parties and out of or related to the acts or
        omissions of any third parties and or affiliates.
      </p>

      <h2>Disputes: Binding Arbitration</h2>

      <p>
        Any Dispute shall first be endeavoured to be settled through amicable
        negotiations in good faith by the Parties. If the Parties cannot agree
        how to resolve the Dispute within thirty (30) days after the date a
        notice is received by the applicable Party, then either you or the
        Foundation may, as appropriate, commence arbitration proceedings. The
        Dispute shall subsequently (and exclusively) be submitted to three
        arbitrators. The nomination of arbitrators and the rules of arbitration
        shall be in accordance with the Rules of Arbitration of Liechtenstein
        (“Schiedsordnung der Liechtensteinischen Industrie- und Handelskammer”).
        The seat of the arbitral tribunal shall be Ruggell, Liechtenstein.
        Language of the proceedings shall be English. The arbitral award is
        final and binding upon the parties. The arbitration fees will be borne
        by the losing party unless otherwise awarded by the arbitral tribunal.
        The parties undertake to carry out the arbitral award in accordance with
        the modalities of said reward.
      </p>

      <h2>Notices</h2>

      <p>
        Notice to the Foundation shall be sent by e-mail to the Foundation
        at&nbsp;
        <a href="mailto: contact@trustlines.foundation">
          contact@trustlines.foundation.
        </a>
        &nbsp;
      </p>

      <p>
        Notice to you shall be by email to the email address you provide to us.
      </p>

      <p>
        Your notice must include (i) your name, postal address, email address
        and telephone number, (ii) a description in reasonable detail of the
        nature or basis of any possible Dispute, and (iii) the specific relief
        that you are seeking.
      </p>

      <h2>Governing Law and Venue</h2>

      <p>
        These Terms will be governed by and construed in accordance with the
        laws of Liechtenstein, without regard to conflict of law rules or
        principles that would cause the application of the laws of any other
        jurisdiction.
        <br />
        Any Dispute that is not or cannot be subject to arbitration will be
        resolved by the courts of Liechtenstein.
      </p>

      <h2>Severability</h2>

      <p>
        If any term, clause or provision of these Terms is held unlawful, void
        or unenforceable, then that term, clause or provision will be severable
        from these Terms and will not affect the validity or enforceability of
        any remaining part of that term, clause or provision, or any other term,
        clause or provision of these Terms. Such unlawful, void or unenforceable
        clause or provisions shall be replaced by valid and enforceable clause
        or provisions, which most closely achieve the commercial intent and
        purpose of these Terms.
      </p>

      <h2>Miscellaneous</h2>

      <p>
        These Terms constitute the entire agreement between the Parties relating
        to your participation in the Merkle Drop and supersede any other
        agreements, statements or information provided by the Foundation and/or
        any of its Affiliates. the Foundation may assign its rights and
        obligations under these Terms. the Foundation’s failure to exercise or
        enforce any right or provision of these Terms will not be construed or
        understood as a waiver of such right or provision. the Foundation will
        not be liable for any delay or failure to perform any obligation under
        these Terms where the delay or failure results from any cause beyond our
        reasonable control. This Agreement and the (trans)actions envisaged
        therein does not create any form of partnership, joint venture, or any
        other similar relationship between the Parties. Except as otherwise
        provided herein, these Terms are intended solely for the benefit of the
        Parties and are not intended to confer third-party beneficiary rights
        upon any other person or entity.
      </p>
    </div>
  );
}

export default TermsAndConditionsParagraph;
