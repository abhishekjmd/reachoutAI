export const buildWhatsAppUrl = (phone: string, message: string) => {
  // 1. Remove all spaces, dashes, brackets, and non-numeric characters 
  // except a leading + if it exists
  let cleanPhone = phone.trim();
  const hasLeadingPlus = cleanPhone.startsWith("+");
  
  // Strip everything but digits
  const digits = cleanPhone.replace(/\D/g, "");
  
  let finalPhone = "";
  
  if (hasLeadingPlus) {
    finalPhone = "+" + digits;
  } else if (cleanPhone.startsWith("00")) {
    // Replace 00 with +
    finalPhone = "+" + digits.substring(2);
  } else if (cleanPhone.startsWith("0")) {
    // Remove leading 0
    finalPhone = digits.substring(1);
  } else {
    // Use digits as-is
    finalPhone = digits;
  }

  return `https://wa.me/${finalPhone}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (phone: string, message: string) => {
  window.open(buildWhatsAppUrl(phone, message), "_blank");
};

