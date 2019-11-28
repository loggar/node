function createEngineer() {
  const skills = {};
  const engineer = {
    getSkill: name => {
      if (!name) return null;
      if (!skills[name]) return null;
      return skills[name];
    },
    setSkill: (name, v) => {
      if (!name || !v) return false;
      skills[name] = v;
    }
  };
  return engineer;
}

const e1 = createEngineer();
e1.setSkill("NodeJS", "Outstanding");
console.log(e1.getSkill("NodeJS"));
