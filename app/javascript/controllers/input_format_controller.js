import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['cardNumber', 'expiryDate', 'cvv']

  connect() {
    console.log('InputFormatController connected')
  }

	// Fix formar of credit card number to insert spaces every 4 digits. AI!
  formatCardNumber(event) {
    let input = event.target
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/(\d{4})(\d{1,4})/, '$1 $2')
      .slice(0, 19)
  }

  formatExpiryDate(event) {
    let input = event.target
    input.value = input.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d{1,2})/, '$1/$2')
      .slice(0, 5)
  }

  formatCVV(event) {
    let input = event.target
    input.value = input.value.replace(/\D/g, '').slice(0, 4)
  }
}
