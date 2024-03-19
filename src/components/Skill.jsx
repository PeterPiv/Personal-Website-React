function Skill({ skillName }) {
  return (
    <div>
      <img src={`../../public/svg/${skillName}.svg`} alt="" />
      which stands for {skillName}
    </div>
  );
}

export default Skill;
