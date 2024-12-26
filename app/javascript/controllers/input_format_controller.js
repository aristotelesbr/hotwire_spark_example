import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['cardNumber', 'expiryDate', 'cvv', 'cardName']

  formatCardNumber(event) {
    let input = event.target
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim()
      .slice(0, 19)
  }

  formatExpiryDate(event) {
    let input = event.target
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{1,2})/, '$1/$2')
      .slice(0, 5)
  }

  formatCardName(event) {
    let input = event.target

    console.log(input.value)
    input.value = input.value.replace(/[0-9]/g, '').toUpperCase()
  }

  formatCVV(event) {
    let input = event.target
    input.value = input.value.replace(/\D/g, '').slice(0, 4)
  }
}
