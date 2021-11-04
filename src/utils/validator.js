const validator = (data, config) => {
  const errors = {};

  const validate = (validateMethod, data, config) => {
    switch (validateMethod) {
      case "isRequired":
        if (!data.trim()) return config.message;
        break;
      case "isValidName": {
        const length = data.trim().length;
        if (length < 3 || length > 20) return config.message;
        break;
      }
      case "isURL": {
        const expression =
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        if (!data.match(regex)) {
          return config.message;
        }
        break;
      }
      case "isValidYear": {
        if (
          Number(data) < 1940 ||
          Number(data) > new Date(Date.now()).getFullYear()
        )
          return config.message;
        break;
      }
      default:
        break;
    }
  };

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );

      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }

  return errors;
};

export default validator;
