module.exports = {
    generateRandomNumber: () => {
      const digits = "0123456789";
      let number = "";
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        number += digits[randomIndex];
      }
      return number;
    }
  };