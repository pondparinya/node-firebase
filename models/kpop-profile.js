class MemberProfile {
  constructor(member_birth, member_name, member_photo) {
    this.member_birth = member_birth;
    this.member_name = member_name;
    this.member_photo = member_photo;
  }
}

class Kpop_Profile {
  constructor(id, image_group, title, subtitle, member_profile) {
    this.id = id;
    this.image_group = image_group;
    this.title = title;
    this.subtitle = subtitle;
    this.member_profile = member_profile;
  }
}

module.exports = { Kpop_Profile, MemberProfile };
