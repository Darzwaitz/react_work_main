const Skill = (props) => {
  return (
    <div className="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
};

export default Skill;
