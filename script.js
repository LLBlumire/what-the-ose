function canExceedPermutation(match, rawstats, immovable=[], mods={}) {
  let stats = JSON.parse(JSON.stringify(rawstats));
  
  for (let attribute in mods) {
    stats[attribute] -= 0;
    stats[attribute] += mods[attribute];
  }

  let maxPull = {
    str: Math.max(stats.str - 9, 0),
    int: Math.max(stats.int - 9, 0),
    wis: Math.max(stats.wis - 9, 0)
  };

  for (let attribute of immovable) {
    maxPull[attribute] = 0
  }

  let available = 0;
  let borrowed = 0;
  let adjStat = (stat) => {
    if (match[stat] !== undefined) {
      if (stats[stat] > match[stat]) {
        if (match[stat] >= 9) {
          let diff = stats[stat] - match[stat];
          if (diff <= maxPull) {
            available += diff;
          }
        }
      } else {
        borrowed += (match[stat] - stats[stat]) * 2;
      }
    } else {
      available += maxPull[stat];
    }
  };
  adjStat("str");
  adjStat("int");
  adjStat("wis");
  
  let bumpStat = (stat) => {
    if (match[stat] !== undefined) {
      if (stats[stat] < match[stat]) {
        borrowed += (match[stat] - stats[stat]) * 2;
      }
    }
  }
  bumpStat("dex");
  bumpStat("con");
  bumpStat("cha");

  return borrowed <= available;
}

var app = new Vue({
  el: '#app',
  data: {
    stats: {
      str: 10,
      int: 10,
      wis: 10,
      dex: 10,
      con: 10,
      cha: 10
    },
    addten: [],
    addfive: [],
    neutral: [],
    subten: [],
    subtwenty: [],
    unplayable: [],
    showSources: {},
    sourceTags: {},
  },
  methods: {
    updateLists: function() {
      let statThresholds = JSON.parse(JSON.stringify(StatThresholds));
      this.addten = [];
      this.addfive = [];
      this.neutral = [];
      this.subten = [];
      this.subtwenty = [];
      this.unplayable = [];
      for (let clazz of statThresholds) {
        if (!this.showSources[clazz.source]) {
          continue;
        }
        let immovable = [];
        if (clazz.unmoveable !== undefined) {
          immovable = clazz.unmoveable;
        }
        let mods = {};
        if (clazz.mods !== undefined) {
          mods = clazz.mods;
        }
        if (canExceedPermutation(clazz.thresholds.addten, this.stats, immovable, mods)) {
          this.addten.push(clazz);
        } else if (
          clazz.thresholds.altten !== undefined &&
          canExceedPermutation(clazz.thresholds.altten, this.stats, immovable, mods)
        ) {
          this.addten.push(clazz);
        } else if (canExceedPermutation(clazz.thresholds.addfive, this.stats, immovable, mods)) {
          this.addfive.push(clazz);
        } else if (
          clazz.thresholds.altfive !== undefined && 
          canExceedPermutation(clazz.thresholds.altfive, this.stats, immovable, mods)
        ) {
          this.addfive.push(clazz);
        } else if (canExceedPermutation(clazz.thresholds.neutral, this.stats, immovable, mods)) {
          this.neutral.push(clazz);
        } else if (canExceedPermutation(clazz.thresholds.subten, this.stats, immovable, mods)) {
          this.subten.push(clazz);
        } else if (canExceedPermutation(clazz.thresholds.playable, this.stats, immovable, mods)) {
          this.subtwenty.push(clazz);
        } else {
          this.unplayable.push(clazz);
        }
      }
    }
  },
  watch: {
    stats: {
      handler: function() { this.updateLists(); },
      deep: true,
    },
  },
  created: function() {
    let sources = new Set(StatThresholds.map((v) => v.source));
    for (let source of sources) {
      this.showSources[source] = false;
      this.sourceTags[source] = source.match(/[^a-z ]/g).join("");
    }
    this.showSources["Classic Fantasy Genre Rules"] = true;
    this.updateLists();
  }
});