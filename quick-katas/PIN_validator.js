//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

function validatePIN (pin) {
    let nums = pin.replace(/\D/g)
    return nums.length == 4 || nums.length == 6
  }

//one liner
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }
