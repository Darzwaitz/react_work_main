import Skill from "./Skill";
const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💡" color="lightblue" />
      <Skill skill="Html Css" emoji="✨" color="orange" />
      <Skill skill="JS" emoji="🖼" color="yellow" />
    </div>
  );
};

export default SkillList;
