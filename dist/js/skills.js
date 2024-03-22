// create list skills
const skills = {
    frontEnd: ['bootstrap', 'css3', 'html5', 'javascript', 'jquery', 'less', 'next', 'react', 'sass', 'typescript'],
    backEnd: ['django', 'nodejs'],
    dataEngineering: ['jupyter', 'matplotlib', 'numpy', 'pandas', 'python'],
    dataBase: ['mongodb', 'mysql'],
    others: ['dart', 'flutter', 'git'],
};
const createSkillItem = (skill) => {
    const item = document.createElement('li');
    item.className = 'c-skills__item';
    item.innerHTML = `
    <div class="c-skills__container-icon">
      <img
        class="c-skills__icon"
        src="img/icons/skills/${skill}.svg"
        alt="${skill}"
      />
    </div>
  `;
    return item;
};
const createSkillList = (skills, listClassName) => {
    const elementListSkill = document.querySelector(listClassName);
    if (elementListSkill != null) {
        for (const skill of skills) {
            elementListSkill.appendChild(createSkillItem(skill));
        }
    }
    else {
        console.log(`Element with the class name "${listClassName}" not found`);
    }
};
createSkillList(skills.frontEnd, ".frontend-list");
createSkillList(skills.backEnd, ".backend-list");
createSkillList(skills.dataEngineering, ".data-engineering-list");
createSkillList(skills.dataBase, ".database-list");
createSkillList(skills.others, ".others-list");
