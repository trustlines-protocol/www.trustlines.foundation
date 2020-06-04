import $ from "jquery"

import { SCROLL_THRESHOLD } from "../../common/const"

const auctionContractAddress = $("#address")
const auctionContractAddressDescription = $("#address-description")
const revealAuctionContractAddressLink = $("#address-reveal-link")
const termsAndConditionsModal = $("#terms-and-conditions-modal")
const termsAndConditionsModalButtonReject = $(
  "#terms-and-conditions-modal-button-reject"
)
const termsAndConditionsModalButtonAccept = $(
  "#terms-and-conditions-modal-button-accept"
)
const termsAndConditionsModalContent = $("#terms-and-conditions-modal-content")

/**
 * Check if the terms and conditions modal has some overflow that could be
 * scrolled. This is necessary because depending on the browser font and window
 * size it could be possible that the whole paragraph is visible. For this
 * scenario the scroll to bottom rule does not hold true anymore.
 */
function checkTermsAndConditionsModalScrollability() {
  if (!termsAndConditionsModal.hasClass("is-active")) {
    return
  }

  const buttonDisabled = termsAndConditionsModalButtonAccept.prop("disabled")
  const modalIsScrollable =
    termsAndConditionsModalContent[0].scrollHeight >
    termsAndConditionsModalContent[0].clientHeight

  if (buttonDisabled && !modalIsScrollable) {
    termsAndConditionsModalButtonAccept.prop("disabled", false)
  }
}

export default function initModal() {
  // Must be set once in the beginning to be stable.
  // Do not work properly with plain HTML
  termsAndConditionsModalButtonAccept.prop("disabled", true)

  window.addEventListener("resize", checkTermsAndConditionsModalScrollability)

  revealAuctionContractAddressLink.click(() => {
    termsAndConditionsModal.addClass("is-active")
    checkTermsAndConditionsModalScrollability()
  })

  termsAndConditionsModalContent.scroll(() => {
    if (
      termsAndConditionsModalContent[0].scrollHeight -
        termsAndConditionsModalContent[0].scrollTop <=
      termsAndConditionsModalContent[0].clientHeight + SCROLL_THRESHOLD
    ) {
      termsAndConditionsModalButtonAccept.prop("disabled", false)
    }
  })

  termsAndConditionsModalButtonReject.click(() => {
    termsAndConditionsModal.removeClass("is-active")
  })

  termsAndConditionsModalButtonAccept.click(() => {
    termsAndConditionsModal.removeClass("is-active")
    revealAuctionContractAddressLink.css("display", "none")
    auctionContractAddress.css("display", "block")
    auctionContractAddressDescription.css("display", "block")
  })
}
