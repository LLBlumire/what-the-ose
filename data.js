const Cleric = {
  name: "Cleric",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {wis: 6},
    neutral: {wis: 9},
    addfive: {wis: 13},
    addten: {wis: 16}
  }
};

const Dwarf = {
  name: "Dwarf",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: { con: 9 },
    subten: {con: 9, str: 6},
    neutral: {con: 9, str: 9},
    addfive: {con: 9, str: 13},
    addten: {con: 9, str: 16}
  }
};

const Elf = {
  name: "Elf",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: {int: 9},
    subten: {int: 9},
    neutral: {int: 9},
    addfive: {int: 13, str: 13},
    addten: {int: 16, str: 13}
  }
};

const Fighter = {
  name: "Fighter",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {str: 6},
    neutral: {str: 9},
    addfive: {str: 13},
    addten: {str: 16}
  }
};

const Halfling = {
  name: "Halfling",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: {con: 9, dex: 9},
    subten: {con: 9, dex: 9},
    neutral: {con: 9, dex: 9},
    addfive: {con: 9, dex: 13},
    altfive: {con: 9, dex: 9, str: 13},
    addten: {con: 9, dex: 13, str: 13},
  }
};

const MagicUser = {
  name: "Magic-User",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {int: 6},
    neutral: {int: 9},
    addfive: {int: 13},
    addten: {int: 16}
  }
};

const Thief = {
  name: "Thief",
  source: "Classic Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {dex: 6},
    neutral: {dex: 9},
    addfive: {dex: 13},
    addten: {dex: 16}
  },
  immovable: ["str"]
};

const Acrobat = {
  name: "Acrobat",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {dex: 6},
    neutral: {dex: 9},
    addfive: {dex: 13},
    addten: {dex: 16}
  },
  immovable: ["str"]
};

const Assassin = {
  name: "Assassin",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {dex: 6},
    neutral: {dex: 9},
    addfive: {dex: 13},
    addten: {dex: 16}
  },
  immovable: ["str"]
};

const Barbarian = {
  name: "Barbarian",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {dex: 9},
    subten: {dex: 9},
    neutral: {dex: 9},
    addfive: {dex: 9, con: 13},
    altfive: {dex: 9, str: 13},
    addten: {dex: 9, con: 16, str: 16}
  }
};

const Bard = {
  name: "Bard",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {dex: 9, int: 9},
    subten: {dex: 9, int: 9, cha: 6},
    neutral: {dex: 9, int: 9, cha: 9},
    addfive: {dex: 9, int: 9, cha: 13},
    addten: {dex: 9, int: 9, cha: 16},
  }
};

const Drow = {
  name: "Drow",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {int: 9},
    subten: {int: 9},
    neutral: {int: 9},
    addfive: {int: 9, str: 13, wis: 13},
    addten: {int: 9, str: 13, wis: 16}
  }
};

const Druid = {
  name: "Druid",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {wis: 6},
    neutral: {wis: 9},
    addfive: {wis: 13},
    addten: {wis: 16}
  }
};

const Duergar = {
  name: "Duergar",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {con: 9, int: 9},
    subten: {con: 9, int: 9, str: 6},
    neutral: {con: 9, int: 9, str: 9},
    addfive: {con: 9, int: 9, str: 13},
    addten: {con: 9, int: 9, str: 16}
  }
};

const Gnome = {
  name: "Gnome",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {con: 9},
    subten: {con: 9},
    neutral: {con: 9},
    addfive: {con: 9, dex: 13, int: 13},
    addten: {con: 9, dex: 13, int: 16}
  }
};

const HalfElf = {
  name: "Half-Elf",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {cha: 9, con: 9},
    subten: {cha: 9, con: 9},
    neutral: {cha: 9, con: 9},
    addfive: {cha: 9, con: 9, int: 13, str: 13},
    addten: {cha: 9, con: 9, int: 16, str: 13},
    altten: {cha: 9, con: 9, int: 13, str: 16},
  }
};

const HalfOrc = {
  name: "Half-Orc",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {},
    subten: {},
    neutral: {},
    addfive: {dex: 13, str: 13},
    addten: {dex: 16, str: 16}
  }
};

const Illusionist = {
  name: "Illusionist",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {dex: 9},
    subten: {dex: 9, int: 6},
    neutral: {dex: 9, int: 9},
    addfive: {dex: 9, int: 13},
    addten: {dex: 9, int: 16},
  }
};

const Knight = {
  name: "Knight",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {con: 9, dex: 9},
    subten: {con: 9, dex: 9, str: 6},
    neutral: {con: 9, dex: 9, str: 9},
    addfive: {con: 9, dex: 9, str: 13},
    addten: {con: 9, dex: 9, str: 16},
  }
};

const Paladin = {
  name: "Paladin",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {cha: 9},
    subten: {cha: 9},
    neutral: {cha: 9},
    addfive: {cha: 9, str: 13},
    altfive: {cha: 9, wis: 13},
    addten: {cha: 9, str: 16, wis: 16}
  }
};

const Ranger = {
  name: "Ranger",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {con: 9, wis: 9},
    subten: {con: 9, wis: 9, str: 6},
    neutral: {con: 9, wis: 9, str: 9},
    addfive: {con: 9, wis: 9, str: 13},
    addten: {con: 9, wis: 9, str: 16}
  }
};

const Svirfneblin = {
  name: "Svirfneblin",
  source: "Advanced Fantasy Genre Rules",
  thresholds: {
    playable: {con: 9},
    subten: {con: 9},
    neutral: {con: 9},
    addfive: {con: 9, dex: 13, int: 13},
    addten: {con: 9, dex: 13, int: 16}
  }
};

var StatThresholds = [
  Cleric,
  Dwarf,
  Elf,
  Fighter,
  Halfling,
  MagicUser,
  Thief,  
  
  Acrobat,
  Assassin,
  Barbarian,
  Bard,
  Drow,
  Druid,
  Duergar,
  Gnome,
  HalfElf,
  HalfOrc,
  Illusionist,
  Knight,
  Paladin,
  Ranger,
  Svirfneblin
]

function addRaceClass(
  race, 
  clazz, 
  source="Advanced Fantasy Genre Rules: Races"
) {
  let name = `${race.name} ${clazz.name}`;
  let thresholds = JSON.parse(JSON.stringify(clazz.thresholds));
  for (let attribute in race.playable) {
    if (
      thresholds.playable[attribute] === undefined || 
      thresholds.playable[attribute] < race.playable[attribute]
    ) {
      thresholds.playable[attribute] = race.playable[attribute];
    }
    if (
      thresholds.subten[attribute] === undefined || 
      thresholds.subten[attribute] < race.playable[attribute]
    ) {
      thresholds.subten[attribute] = race.playable[attribute];
    }
    if (
      thresholds.neutral[attribute] === undefined || 
      thresholds.neutral[attribute] < race.playable[attribute]
    ) {
      thresholds.neutral[attribute] = race.playable[attribute];
    }
    if (thresholds.altfive !== undefined) {
      if (
        thresholds.altfive[attribute] === undefined ||
        thresholds.altfive[attribute] < race.playable[attribute]
      ) {
        thresholds.altfive[attribute] = race.playable[attribute];
      }
    }
    if (
      thresholds.addten[attribute] === undefined || 
      thresholds.addten[attribute] < race.playable[attribute]
    ) {
      thresholds.addten[attribute] = race.playable[attribute];
    }
    if (thresholds.altten !== undefined) {
      if (
        thresholds.altten[attribute] === undefined ||
        thresholds.altten[attribute] < race.playable[attribute]
      ) {
        thresholds.altten[attribute] = race.playable[attribute];
      }
    }
  }
  StatThresholds.push({
    name: name,
    source: source,
    thresholds: thresholds,
    mods: race.mods
  })
}

const RDrow = {
  name: "Drow",
  playable: {int: 9},
  mods: {con: -1, dex: 1}
};
[Acrobat, Assassin, Cleric, Fighter, Knight, MagicUser, Ranger, 
  Thief].map((cc) => addRaceClass(RDrow, cc));


const RDuergar = {
  name: "Duergar",
  playable: {con: 9},
  mods: {cha: -1, con: 1}
};
[Assassin, Cleric, Fighter, Thief].map((cc) => addRaceClass(RDuergar, cc));

const RDwarf = {
  name: "Dwarf",
  playable: {con: 9},
  mods: {cha: -1, con: 1}
};
[Assassin, Cleric, Fighter, Thief].map((cc) => addRaceClass(RDwarf, cc));

const RElf = {
  name: "Elf",
  playable: {int: 9},
  mods: {con: -1, dex: 1}
};
[Acrobat, Assassin, Cleric, Druid, Fighter, Knight, MagicUser, Ranger, 
  Thief].map((cc) => addRaceClass(RElf, cc));

const RGnome = {
  name: "Gnome",
  playable: {con: 9, int: 9},
  mods: {}
};
[Assassin, Cleric, Fighter, Illusionist, 
  Thief].map((cc) => addRaceClass(RGnome, cc));

const RHalfElf = {
  name: "Half-Elf",
  playable: {},
  mods: {},
};
[Acrobat, Assassin, Bard, Cleric, Druid, Fighter, Knight, Paladin, Ranger, 
  MagicUser, Thief].map((cc) => addRaceClass(RHalfElf, cc));

const RHalfling = {
  name: "Halfling",
  playable: {con: 9, dex: 9},
  mods: {dex: 1, str: -1}
};
[Druid, Fighter, Thief].map((cc) => addRaceClass(RHalfling, cc));

const RHalfOrc = {
  name: "Half-Orc",
  playable: {con: 9, str: 9},
  mods: {cha: -1, con: +1, str: +1},
};
[Acrobat, Assassin, Cleric, Fighter, 
  Thief].map((cc) => addRaceClass(RHalfOrc, cc));

const RSvirfneblin = {
  name: "Svirfneblin",
  playable: {con: 9, int: 9},
  mods: {}
};
[Assassin, Cleric, Fighter, Illusionist, 
  Thief].map((cc) => addRaceClass(RSvirfneblin, cc));

const RRHuman = {
  name: "Human",
  playable: {},
  mods: {cha: 1, con: 1}
};

[
  RDrow, RDuergar, RDwarf, RElf, RGnome, RHalfElf, RHalfling, RHalfOrc, RRHuman, 
  RSvirfneblin
].map((rr) => [
  Cleric, Fighter, MagicUser, Thief, Acrobat, Assassin, Barbarian, Bard, Druid,
  Illusionist, Knight, Paladin, Ranger
].map((cc) => addRaceClass(rr, cc, "Advanced Fantasy Genre Rules: Races+")));