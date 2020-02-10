# Developer Documentation

## Basics

### Development 

The following command sequence will install all dependencies and run a local
development server. Such will automatically detect changes in the code and
update the view. The website can be viewed at http://localhost:8080.

```sh
$ yarn install
$ yarn watch
```

### Build

To build a release version configured for production run the following:

```sh
$ yarn install
$ yarn build
```

### Deploy

Execute the following to deploy a new production release and push it to
_GH-Pages_ pages. The final result can be seen at https://trustlines.foundation.

```sh
$ yarn install
$ yarn deploy
```

---

## Review Procedure

After a technical review of a PR, a member of the comms team should review the
changes visually. This review is only necessary for changes requested by themselves and
not for pure technical issues (should be labeled as such).

The review happens on a dedicated machine at
https://preview.trustlines.foundation.test.beercoin.io. To display a new to
review version, push your changes to the `origin` with a branch name that ends with
`/preview`. So for example if you worked on a branch called
`feature/my-awesome-stuff` you should push it like:

```sh
$ git push origin HEAD:feature/my-awesome-stuff/preview
```

You will need to wait for a short while until the pushed version is available. You can
open the preview website in your browser and checkout the build reference in red
letters at the top left corner of the page.

Please take care of a clean `origin` repository. While feature branches can be
deleted from the Web-UI of the PR, the preview one must be removed manually.

```sh
$ git push --delete origin <YOUR_BRANCH_NAME>/preview
```

### Technical Background

The _CircleCI_ setup is configured in a way that it builds a _Docker_ image for
every version of the project. The image tagging is based on the branch name it
is built from. The machine that serves the preview version is configured to download new _Docker_ images, which are tagged with `preview` automatically.
The whole process takes some time. First, the _CircleCI_ build must run through.
Afterward, the Watchtower service must detect and pull the new image. It is
configured to do a lookup every 30s.

### Collusion

At the moment, there can be only one preview version served at the same time. As
soon as someone pushes a new preview version, the server will update itself. If
there are multiple PRs open that need a review, the order must be agreed upon.
In case a different version has overwritten an earlier one that must be still
reviewed, _CircleCI_ can be triggered to reprocess the other branch. Therefore
visit the
[Web-UI](https://circleci.com/gh/trustlines-protocol/www.trustlines.foundation)
of _CircleCI_. As an alternative, you could rewrite your last commit and force push
it. Please be careful with changing shared _Git_ history. Make sure that no
other branch is based on it and that you do it at the very end of your work.
Since the review by the comms team should be the last step, the former
requirement should be fulfilled.

```sh
$ git commit --amend --no-edit
$ git push --force-with-lease origin <YOUR_BRANCH_NAME>/preview
```

## Claiming the Merkle-Drop

The development version of the website is linked to the [test
deployment](https://goerli.etherscan.io/address/0xcde08c9b799b67b5ac7397e76aacab2515f8d108)
of the Merkle-Drop on the Goerli testnet. So is the review version. The list
of eligible accounts includes `400.000` addresses. They can be freely used for
testing purposes. Not all addresses are funded with `GETH`. It can be retrieved by
the [Goerli Faucet](https://goerli-faucet.slock.it/) or by asking Andreas. The
list with all addresses can be found in the [shared
drive](https://drive.google.com/open?id=1FEXQxOvRuVgub1j6WZzJdVq8iHjkA3qi). The
private key in the `accounts` file can be imported directly to _MetaMask_ or
other wallets that support doing this. Please mark the used addresses that have
already been claimed. A double-claim only gets recognized by the message of a failing
transaction. The initial check of eligibility on the website does not have any
significance for that.
