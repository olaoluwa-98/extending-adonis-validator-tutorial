"use strict";

const { validate } = use("Validator");

class CharacterController {
  async showPage({ view }) {
    return view.render("check-character");
  }

  async checkCharacter({ request, view }) {
    const input = request.all();
    // create the rules for validation
    const rules = {
      character: "required|mcu_character"
    };

    const validation = await validate(input, rules);
    let message = `${input.character} is part of the MCU, yay!`;

    if (validation.fails()) {
      message = `Nah, ${input.character} isn't part of the list as far as I am concerned`;
    }

    return view.render("check-character", { message });
  }
}

module.exports = CharacterController;
