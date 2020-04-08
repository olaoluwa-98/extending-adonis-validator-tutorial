const { ioc } = require("@adonisjs/fold");
const { hooks } = require("@adonisjs/ignitor");

const mcuCharacter = async (data, field, message, args, get) => {
  // get the character value
  const value = get(data, field);

  if (!value) {
    /**
     * skip validation if value is not defined. `required` rule
     * should take care of it.
     */
    return;
  }

  // validate the character
  const shortListOfMCUCharacters = [
    "iron man",
    "hulk",
    "spider-man",
    "loki",
    "thor",
    "odin",
    "black widow",
    "nick fury",
    "gamora",
    "black panther",
    "doctor strange",
    "groot",
    "ant-man",
    "captain america",
    "hawkeye",
    "wasp",
    "star-lord",
    "shuri",
    "valkrie",
    "dormammu"
  ];

  // if the character is not in the list, throw the validation error message
  if (!shortListOfMCUCharacters.includes(value.toLowerCase()))
    throw message ||
      `Nah, ${value} isn't part of the list as far as I am concerned`;
};

hooks.after.providersRegistered(() => {
  const Validator = ioc.use("Validator");
  Validator.extend("mcuCharacter", mcuCharacter);
});
