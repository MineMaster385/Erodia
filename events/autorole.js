module.exports = (client, member) => {
  const role1 = member.guild.roles.find("Invité");
  const role2 = member.guild.roles.find("___________Membre___________");
  member.roles.add(role1);
  member.roles.add(role2);
};
