import React from "react";

// The terms and conditions are duplicated in src/view/auction/_terms-conditions.njk
export default function TermsAndConditions() {
  return (
    <div className="terms-and-conditions">
      <h1>Background</h1>
      <h2>The Auction</h2>

      <p>
        The Trustlines Validator auction is a Dutch auction held to discover the
        fair opportunity cost value, i.e. price of a Validator Slot. The
        Ethereum address of successful bidders in a successful Auction will be
        included in the Validator Set.
      </p>

      <ol>
        <li>
          <strong>Acceptable tokens for a bid</strong>: The Auction is a smart
          contract on the Ethereum Mainchain. Note that the smart contract will
          not accept any other tokens than the Trustlines Network Token as a
          bid.
        </li>
        <li>
          <strong>Participation</strong>: To be able to participate in the
          Auction, your Ethereum address must have been whitelisted by the
          Foundation prior to the start of the Auction. Every whitelisted
          Ethereum address can participate in the auction only once.{" "}
          <strong>
            Do not send your Trustlines Network Tokens to the auction contract
            since this will result in you losing your tokens. Instead, use the
            bid feature on the Trustlines auction page.
          </strong>
        </li>
        <li>
          <strong>Timing</strong>: The Auction ends after 14 days starting from
          the Start Date or when the 36th successful bid is received by the
          smart contract. Whichever comes first.
        </li>
        <li>
          <strong>Threshold</strong>: If fewer than 15 Ethereum addresses have
          successfully participated at the time the Auction ends, it will fail.
          No Validator slots will be awarded and all participants can withdraw
          their bids. If 15 or more successful bids were received, the Auction
          will succeed.
        </li>
        <li>
          <strong>Limited Validator Slots</strong>: 36 Validator Slots are up
          for auction.
        </li>
      </ol>

      <h2>How the Auction works</h2>

      <p>
        The Auction begins when a transaction is sent by the Foundation at the
        Start Date. After this transaction, the smart contract operates
        independently and the Foundation will neither have nor retain any
        control or influence over it.
      </p>

      <p>
        Once initialized, the Auction starts at a price of 50,000,000 Trustlines
        Network Tokens per Validator Slot. Then the price will continuously
        decrease over time as defined by the following parameters & functions:
      </p>

      <pre>
        t = elapsed_time_in_ms / auction_duration_in_days, price = price_start *
        (1+t) / (1+t+decay), decay = (t^3) / 746571428571
      </pre>

      <p>whereby:</p>

      <ul>
        <li>
          <strong>elapsed_time_in_ms</strong> is the elapsed time in ms since
          the auction started
        </li>
        <li>
          <strong>auction_duration_in_days</strong> equals 14 days
        </li>
        <li>
          <strong>price_start</strong> equals 50,000,000 Trustlines Network
          Tokens
        </li>
      </ul>

      <p>
        When the price falls to a point that a Validator Candidate thinks is
        fair, they can submit their bid over the trustlines auction{" "}
        <a href="https://trustlines.foundation/auction">page</a>. If and when
        the transaction is successfully included in the Ethereum Mainchain, the
        Validator Candidate has obtained a Validator Slot in the event of a
        successful Auction (see Threshold).
      </p>
      <p>
        If the Auction is successful, all Validator Slots are priced equal, i.e.
        being equal to the price of the last successful bid received by the
        smart contract. Every participant can withdraw the difference between
        the end Validator Slot price and their bid.
      </p>
      <p>
        The final Validator Slot price of each Validator Slot cannot be
        withdrawn from the smart contract and will be transferred to the Deposit
        Locker (more info in the definition of the Validator Auction) smart
        contract and kept there as a Stake for 9 months starting from the date
        the Auction ends (see Timing). Once the 9 months have passed, Validators
        can withdraw their Stake provided it doesn’t get slashed due to
        equivocation.
      </p>

      <h2>Validator technical capabilities</h2>

      <p>
        If a Validator Candidate successfully bid for a slot in the Auction,
        he/she will be included in the Validator Set. This will allow the
        Validator to run a validator node which can create blocks on the
        Trustlines Blockchain. Additionally to validating and creating blocks
        (including the genesis block) they will also be able to operate the
        Trustlines Bridge which is used to exchange Trustlines Network Tokens
        from the Ethereum Mainchain to Trustlines Network Coins on the
        Trustlines Blockchain. Other than these described capabilities there are
        no other unique capabilities connected solely to a Validator slot.{" "}
      </p>

      <h2>Why participate</h2>

      <p>
        The Trustlines Blockchain is a minimal viable Proof of Stake sidechain
        to the Ethereum Mainchain and is governed by a greenfield governance
        model in which Validators can gain technical and governance experience
        with such an experimental consensus model.
      </p>
      <p>
        Besides the Validator technical capabilities mentioned above, Validators
        will also receive block rewards (as to be defined within the chain spec)
        in the form of Trustlines Network Coins if they actively run their
        validator node and take part in block creation. They will also be in a
        position to charge transaction fees for transactions that are included
        within the blocks a Validator creates.
      </p>
      <p>
        Note that receiving block rewards and transaction fees is dependent on a
        community of Validators emerging and the potential users of the
        Trustlines Blockchain. The Foundation cannot guarantee that a Trustlines
        Blockchain including the Chain Spec as proposed by the Foundation
        actually emerges out of the actions of these third party stakeholders.
        Hence, participating in the Auction and thereby agreeing to these Terms
        and Conditions does not entail a right or an entitlement in any way
        whatsoever to either becoming and/or remaining a Validator or receiving
        block rewards and/or transaction fees.
      </p>

      <h2>General remarks, recommendations and good practice</h2>

      <p>
        Bidding Trustlines Network Tokens in the Auction does not guarantee a
        Validator Slot. Especially, your bid/transaction will be rejected:
      </p>

      <ul>
        <li>If you bid from an Ethereum address that isn’t whitelisted</li>
        <li>If you bid less than the current Auction price</li>
        <li>
          If you bid before the Auction has started or after the auction has
          ended
        </li>
        <li>
          If you have already bid in the Auction (multiple bids will not result
          in more than one slot. Only 1 slot per Ethereum address).
        </li>
      </ul>

      <p>Additionally:</p>

      <ul>
        <li>
          The Auction might not meet the threshold of 15bidders, in which case
          the Auction has failed and the Trustlines Network Tokens can be
          withdrawn from the smart contract by its respective Auction
          participant.
        </li>
        <li>
          The current Validators might choose not to fork the Trustlines
          Blockchain with the new validator set. This requires at least 50% of
          the current Validator Set to do so.
        </li>
        <li>
          Users of the Trustlines Blockchain or projects building on top of it
          might align on a different Validator Set, therefore choosing a
          different fork of the Trustlines Blockchain rendering the Validator
          Set determined by the auction obsolete. Validators will still be able
          to withdraw their Stake after the 9-month staking period.
        </li>
      </ul>

      <p>
        The functioning of the Ethereum mainchain is out of the control of the
        Foundation, so the Foundation cannot be held liable for any malfunction,
        breakdown, or abandonment of the Ethereum protocol and/or the Ethereum
        Mainchain.
      </p>

      <p>
        All actions are voluntary, there is no obligation to take part in the
        Auction.
      </p>

      <p>
        Validators can be removed from the Validator Set by the majority of the
        Trustlines Blockchain community by hard forking. Validators removed from
        the Validator set in such a way will neither earn block rewards nor
        transaction fees going forward. The Stake on the Ethereum Mainchain will
        remain locked for the remainder of the 9-month Staking period and will
        be slashable if equivocation can be proved.
      </p>

      <h1>Definitions</h1>

      <p>
        <strong>Affiliate(s)</strong> means any and all persons and or entities
        directly or indirectly controlling, controlled by or under common
        control with such person, where control may be by either management
        authority, contract or equity interest.{" "}
      </p>

      <p>
        <strong>Ethereum Mainchain or Ethereum blockchain</strong> means the
        smart contract protocol, virtual machine and decentralized network
        including all its related components and protocol-related projects both
        present and future, which​ ​began​ ​operation​ ​(Genesis​ ​Block)​ ​on​
        ​July​ ​30th,​ ​2015.
      </p>

      <p>
        <strong>Ether (ETH)</strong> means the cryptocurrency native to the
        Ethereum mainchain, i.e. the blockchain token​ ​of​ ​Ethereum.
      </p>

      <p>
        <strong>Trustlines Network</strong> is short for “The Trustlines Network
        ecosystem”, which is an ecosystem of entities, individuals, and code
        that aims to promote financial & economic inclusion of all people
        through decentralized and open source systems.
      </p>

      <p>
        <strong>Trustlines Protocol</strong> represents a set of rules,
        processes and definitions forged into deployable code. It will comprise
        several technical components used to calculate paths and store
        transactions, i.e. smart contracts, the Trustlines Blockchain and the
        code for the relay servers. It aims to provide a base layer to enable
        interactions within the Trustlines Network.
      </p>

      <p>
        <strong>Trustlines Blockchain</strong> means a purpose built sidechain
        to the Ethereum mainchain that is intended to serve as a database and
        storage for transactions to support an implementation of the Trustlines
        Protocol.
      </p>

      <p>
        <strong>Foundation</strong> means​ ​the Foundation,​ ​a​ ​Liechtenstein
        non-profit​ foundation​ ​registered​ ​in​ Ruggell, Liechtenstein.
      </p>

      <p>
        <strong>Final Validator slot price</strong> is the price of the last
        successful bid that has been successfully sent to the auction contract
        and is included in the Ethereum Mainchain.
      </p>

      <p>
        <strong>Proof of Stake (PoS)</strong> means a type of consensus
        algorithm by which a cryptocurrency blockchain network aims to achieve
        distributed consensus. In PoS-based cryptocurrency blockchain networks
        the creator of the next block is chosen via various combinations of
        random selection. In contrast, the algorithm of proof-of-work-based
        cryptocurrencies such as bitcoin uses mining; that is, the solving of
        computationally intensive puzzles to validate transactions and create
        new blocks.
      </p>

      <p>
        <strong>Sidechain</strong> means a designation for a blockchain that
        runs in parallel to a primary blockchain. Entries from the primary
        blockchain can be linked to and from the sidechain; this allows the
        sidechain to otherwise operate independently of the primary blockchain.
      </p>

      <p>
        <strong>Validator</strong> means an individual or entity who or which
        has deployed and operates the Trustlines Blockchain client in order to
        validate and relay transactions on the Trustlines Blockchain and is part
        of the Validator Set.
      </p>

      <p>
        <strong>Auction</strong> means the Trustlines Validator auction governed
        by these terms and conditions. This auction is being hosted via a
        combination of Smart Contracts on the Ethereum Mainchain in order to
        discover the fair opportunity cost value (i.e. price of a Validator
        Slot) and thereby the amount of TLNto be staked in order to obtain a
        Validator Slot on the Trustlines Blockchain.
      </p>

      <p>
        <strong>Validator Candidate</strong> means an individual or entity whose
        Ethereum address which he/she/it has provided to the Foundation and has
        been whitelisted in the Auction smart contract by the Foundation in
        order to take part in the Auction.
      </p>

      <p>
        <strong>Validator Slot</strong> one of the Validator positions being
        auctioned in this Auction.
      </p>

      <p>
        <strong>Validator Set</strong> means a list of the Ethereum addresses of
        the Validator Candidates that have successfully obtained a Validator
        Slot. Said list being maintained in a specific smart contract as defined
        within the chain spec.
      </p>

      <p>
        <strong>Terms</strong> mean these terms and conditions forming the
        Agreement between you, the Validator Candidate and the Foundation.
      </p>

      <p>
        <strong>Disputes</strong> means any dispute, claim, suit, action,cause
        of action, demand or proceeding arising out​ ​or​ ​in​ ​connection​
        ​with​ ​this​ ​Agreement,​ ​or​ ​the​ ​breach,​ ​termination​ ​or​
        ​invalidity​ ​thereof.
      </p>

      <p>
        <strong>Stake</strong> means the amount of TLN deposited in the Deposit
        Locker smart contract and equaling the final Auction Validator Slot
        price.
      </p>

      <p>
        <strong>
          <a href="https://github.com/trustlines-protocol/blockchain/pull/365/commits/f394906c5ed3fb7da8d79661a53945cba17fc6dd">
            Trustlines Bridge
          </a>
        </strong>{" "}
        means a combination of one smart contract deployed on the Ethereum
        Mainchain, one smart contract deployed on the Trustlines Blockchain, and
        a tool (tlbc - bridge) that Validators run. It allows to transfer
        Trustlines Network Tokens from the Ethereum Mainchain into the
        Trustlines chain as native Trustlines Network Coins. The exact code and
        specifications of the Trustlines Bridge are still in development.
      </p>

      <p>
        <strong>
          <a href="https://github.com/trustlines-protocol/blockchain/blob/master/contracts/contracts/token/TrustlinesNetworkToken.sol">
            Trustlines Network Tokens (TLN)
          </a>
        </strong>{" "}
        means tokens within the ERC20{" "}
        <a href="https://etherscan.io/token/0x679131F591B4f369acB8cd8c51E68596806c3916">
          TLN token
        </a>{" "}
        contract on the Ethereum Mainchain, which can be converted to TLC by
        sending them to the Trustlines Bridge.
      </p>

      <p>
        <strong>Trustlines Network Coins (TLC)</strong> means similar to the
        Ethereum Mainchain, the Trustlines Blockchain requires transaction fees
        to be paid in a cryptocurrency native to the blockchain. These tokens
        will be called Trustlines Network Coins. The exact code and
        specifications of the TLC is still in development.
      </p>

      <p>
        <strong>Chain spec</strong> means a JSON file which specifies rules of a
        blockchain.
      </p>

      <p>
        <strong>JSON</strong> means an open-standard file format that uses
        human-readable text to transmit data objects consisting of
        attribute-value pairs and array data types.
      </p>

      <p>
        <strong>Smart Contract(s)</strong> means the specific smart contracts
        used for this Auction as can be viewed on{" "}
        <a href={"https://etherscan.io/address/" + process.env.AUCTION_ADDRESS}>
          https://etherscan.io/address/{process.env.AUCTION_ADDRESS}
        </a>
      </p>

      <p>
        <strong>Equivocation</strong> We define equivocation of a (present,
        former, or future) validator as using their private key to sign two or
        more different blocks with the same step number, irrespective of the
        block's height, validity, or other fields.
      </p>

      <p>
        <strong>Step number/time slot</strong> Validators are assigned time
        slots in a{" "}
        <a href="https://en.wikipedia.org/wiki/Round-robin_scheduling">
          round robin
        </a>{" "}
        fashion in which they can produce a block which increases the Blockchain
        length
      </p>

      <h1>Acceptance of terms and conditions</h1>

      <p>
        By participating in the Auction, you accept these terms and conditions.
      </p>

      <h1>Representations and warranties of the Validator Candidate</h1>

      <p>
        By participating in the Auction, the Validator Candidate represents and
        warrants that:
      </p>

      <ol>
        <li>You have read, understand and accept these Terms;</li>
        <li>
          You understand the restrictions and risks associated with taking part
          in the Auction as set forth in these Terms, and acknowledge and assume
          all such restrictions and risks;
        </li>
        <li>
          You have a sufficient understanding of the functionality, usage,
          storage, transmission mechanisms and intricacies associated with
          cryptographic tokens and blockchain-based software systems;
        </li>
        <li>
          You have obtained sufficient information about the Trustlines
          Protocol, the Trustlines Network, the Auction, the Validator technical
          capabilities, the Trustlines Blockchain and the Foundation to make an
          informed decision whether or not to take part in the Auction;
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
          the Auction, the Validator technical capabilities, the Validator Slots
          and the Trustlines Protocol comply with applicable laws and
          regulations in your jurisdiction, including, but not limited to, (i)
          legal capacity and any other threshold requirements in your
          jurisdiction (ii) and any foreign exchange or regulatory restrictions
          applicable to such actions.
        </li>
      </ol>

      <h1>Review and testing of the Smart Contracts</h1>

      <p>
        The Smart Contracts have been, on a reasonable effort basis, reviewed,
        tested, and approved by technical experts. The technical experts have
        confirmed to the Foundation that the Auction Smart Contracts have, with
        regard to both accuracy and security, been programmed according to the
        current state of the art. The Validator Candidate, however, understands
        and accepts that smart contract technology is still in an early
        development stage and its application is of an experimental nature that
        carries significant operational, technological, financial, regulatory,
        and reputational risks. Accordingly, while the conducted review and
        testing raises the level of security and accuracy, in theory, the
        Validator Candidate understands and accepts that the review and testing
        does not amount to any form of warranty, including direct or indirect
        warranties that the Smart Contracts are fit for a particular purpose or
        do not contain any weaknesses, vulnerabilities or bugs which could
        cause, inter alia, the complete loss of the Ether sent to the Smart
        Contracts and/or held in the Smart Contract.
      </p>

      <h1>Associated risks</h1>

      <p>
        By participating in the Auction, you expressly acknowledge and assume
        the following risks:
      </p>

      <ul>
        <li>
          Risk​ ​of​ ​losing​ a Validator Slot, TLN bid or Stake​ due​ ​to​
          ​loss​ ​of​ ​private​ ​key(s);
        </li>
        <li>
          Risks​ ​associated​ ​with​ ​the​ ​Ethereum​ blockchain: any
          malfunction, breakdown or abandonment of the Ethereum blockchain may
          have a material adverse effect on the Smart Contracts;
        </li>
        <li>
          Risk​ ​of​ ​mining​ ​attacks: the Auction Smart Contract is
          susceptible to attacks by miners in the course of validating bids on
          the Ethereum blockchain, including, but not limited, to double-spend
          attacks, majority mining power attacks, and selfish-mining attacks.
          Any successful attacks present a risk to the Auction including, but
          not limited to, accurate execution and recording of bids;
        </li>
        <li>
          Risk​ ​of​ ​hacking​ ​and​ ​security​ ​weaknesses: hackers or other
          malicious groups or organizations may attempt to interfere with the
          Auction in a variety of ways, including, but not limited to, malware
          attacks, denial of service attacks, consensus-based attacks, Sybil
          attacks, smurfing, and spoofing;
        </li>
        <li>
          Risk​ ​of​ ​uninsured​ ​Losses: unlike bank accounts or accounts at
          financial institutions, the TLN held in the Auction Smart Contract is
          uninsured unless you specifically obtain private insurance to insure
          them. Thus, in the event of loss or loss of utility value, there is no
          public insurer or private insurance arranged by the Foundation, to
          offer recourse to you;{" "}
        </li>
        <li>
          Risks​ ​associated​ ​with​ ​uncertain​ ​regulations​ ​and​
          ​enforcement​ ​actions: the regulatory status of, including but not
          limited to the Auction, the Validator Slots, and distributed ledger
          technology is unclear or unsettled in many jurisdictions. It is
          difficult to predict how or whether regulatory agencies may apply
          existing regulation with respect to such technology and its
          applications. It is likewise difficult to predict how or whether
          legislatures or regulatory agencies may implement changes to law and
          regulations affecting distributed ledger technology and its
          applications, including but not limited to the Auction and the
          Validator Slots. Regulatory actions could negatively impact the whole
          Trustlines Protocol in various ways, including, for purposes of
          illustration only, that some or all of the parties involved in the
          Trustlines Protocol in general might require licensing or is subject
          to existing legislation;
        </li>
        <li>
          Risks​ ​arising​ ​from​ ​taxation; the tax characterization of
          acquiring a Validator Slot and/or acting as a Validator is uncertain.
          You must seek your own tax advice in connection with your partaking in
          the Auction, which may result in adverse tax consequences to you,
          including withholding taxes, income taxes, and tax reporting
          requirements.
        </li>
        <li>
          Unanticipated​ ​risks: blockchain technology and the Trustlines
          Protocol are a new and limitedly tested technology. In addition to the
          risks referred to above, there are other risks associated with your
          partaking in the Trustlines Auction, including unanticipated risks.
          Such risks may further materialize as unanticipated variations or
          combinations of the risks previously referred to.
        </li>
      </ul>

      <h1>Indemnification</h1>

      <p>
        To the fullest extent permitted by applicable law, you will indemnify,
        defend and hold harmless the Foundation and its Affiliates from and
        against all claims, demands, actions, damages, losses, costs and
        expenses (including attorneys’ fees) that arise from or relate to (i)
        you participating in the Auction; (ii) your obligations, representations
        and warranties under these Terms, (iii) your violation of these Terms,
        and/or (iv) your violation of any rights of any other person or entity,
        directly and indirectly, related to the Auction.
      </p>

      <h1>Exclusion of Warranties</h1>

      <p>
        To the full extent permitted by law, no warranty, guarantee or similar
        assurance whatsoever is expressed or implied with regard to the
        Trustlines Protocol and its components. The smart contracts are used at
        the sole risk of the User (Users included but not limited to a Vaidator
        Candidate) and on an ‘as is’, ‘under development’ and ‘as available’
        basis.
      </p>

      <p>
        Participating in the Auction and thereby agreeing to these Terms does
        neither entail a right nor an entitlement in any way whatsoever to
        either becoming and/or remaining a Validator or receiving rewards and/or
        fees.
      </p>

      <h1>No Reliance</h1>

      <p>
        The Validator Candidate has had an opportunity to (i) review these
        Terms, (ii) ask questions and receive answers from the Foundation
        concerning these Terms and the Auction, and (iii) obtain any additional
        information concerning the Auction, the Smart Contracts and the
        Foundation to the extent necessary for Validator Candidate in order to
        make an informed decision to enter into these Terms and to take part in
        the Auction. The Validator Candidate acknowledges that in making a
        decision to take part in the Auction, the Validator Candidate has relied
        solely upon these Terms and independent investigations made by the
        Validator Candidate. The Validator Candidate is not relying on the
        Foundation with respect to the legal, tax and other economic factors
        involved in entering into these Terms and understands that it is solely
        responsible for reviewing the legal, tax and other economic
        considerations involved with taking part in the Auction with its own
        legal, tax and other advisers.
      </p>

      <h1>Limitation of Liability</h1>

      <p>
        The Validator Candidate acknowledges and agrees that, to the fullest
        extent permitted by any applicable law, it will not hold the Foundation
        and its Affiliates liable for any direct, indirect, special, incidental,
        consequential or exemplary damages (including but not limited to loss of
        income, revenue and profits, or goodwill, or data) or injury whatsoever
        caused by or related to his/her partaking (or inability to partake) in
        the Auction or the use (or inability to use) of the Smart Contracts
        under any cause of action whatsoever of any kind in any jurisdiction.
      </p>
      <p>
        The Validator Candidate acknowledges and agrees that, to the fullest
        extent permitted by any applicable law, the risk of taking part in the
        Auction rests entirely with the Validator Candidate.{" "}
      </p>
      <p>
        The limitations set forth in the Clause do not and will not limit or
        exclude liability of the Foundation for fraud or intentional, willful or
        reckless misconduct.
      </p>

      <h1>Release</h1>

      <p>
        To the fullest extent permitted by applicable law, the Validator
        Candidate releases the Foundation and its Affiliates from
        responsibility, liability, claims, demands and/or damages (actual and
        consequential) of every kind and nature, known and unknown (including,
        but not limited to, claims of negligence), arising out of or related to
        disputes between the Parties and out of or related to the acts or
        omissions of any third parties.
      </p>

      <h1>Disputes: Binding Arbitration</h1>

      <p>
        Any Dispute shall first be endeavoured to be settled through amicable
        negotiations in good faith by the Parties. If the Validator Candidate
        and the Foundation cannot agree how to resolve the Dispute within thirty
        (30) days after the date a notice is received by the applicable Party,
        then either you or the Foundation may, as appropriate, commence
        arbitration proceedings. The Dispute shall subsequently (and
        exclusively) be submitted to three arbitrators. The nomination of
        arbitrators and the rules of arbitration shall be in accordance with the
        Rules of Arbitration of Liechtenstein (“Schiedsordnung der
        Liechtensteinischen Industrie- und Handelskammer”). The seat of the
        arbitral tribunal shall be Ruggell, Liechtenstein. Language of the
        proceedings shall be English. The arbitral award is final and binding
        upon the parties. The arbitration fees will be borne by the losing party
        unless otherwise awarded by the arbitral tribunal. The Parties undertake
        to carry out the arbitral award in accordance with the modalities of
        said reward.
      </p>

      <h1>Notices</h1>

      <p>
        Notice to the Foundation shall be sent by email to the Foundation at
        contact@ trustlines.foundation
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

      <h1>Governing Law and Venue</h1>

      <p>
        These Terms will be governed by and construed in accordance with the
        laws of Liechtenstein, without regard to conflict of law rules or
        principles that would cause the application of the laws of any other
        jurisdiction.{" "}
      </p>
      <p>
        Any Dispute that is not or cannot be subject to arbitration will be
        resolved by the courts of Liechtenstein.
      </p>

      <h1>Severability</h1>

      <p>
        If any term, clause or provision of these Terms is held unlawful, void
        or unenforceable, then that term, clause or provision will be severable
        from these Terms and will not affect the validity or enforceability of
        any remaining part of that term, clause or provision, or any other term,
        clause or provision of these Terms. Such unlawful, void or unenforceable
        clause or provisions shall be replaced by valid and enforceable clause
        or provisions, which most closely achieve the commercial intent and
        purpose of this Agreement.
      </p>

      <h1>Miscellaneous</h1>

      <p>
        These Terms constitute the entire agreement between the Parties relating
        to your acquisition of Auction from the Foundation and supersede any
        other agreements, statements or information provided by the Foundation
        and/or its Affiliates. the Foundation may assign its rights and
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

      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
}
