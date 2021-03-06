function FollowToggle(el, options) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id") || options.userId;
  this.followState = (this.$el.data("initial-follow-state") ||
                      options.followState);
  this.render();

  this.$el.on("click", this.handleClick.bind(this));
}

FollowToggle.prototype.handleClick = function (event) {
  const followToggle = this;

  event.preventDefault();

  if (this.followState === "followed") {
    this.followState = "unfollowing";
    this.render();

    $.ajax({
      url: "/users/" + this.userId + "/follow",
      dataType: "json",
      method: "DELETE",
      success() {
        followToggle.followState = "unfollowed";
        followToggle.render();
      }
    });
  } else if (this.followState === "unfollowed") {
    this.followState = "following";
    this.render();

    $.ajax({
      url: "/users/" + this.userId + "/follow",
      dataType: "json",
      method: "POST",
      success() {
        followToggle.followState = "followed";
        followToggle.render();
      }
    });
  }
};

FollowToggle.prototype.render = function () {
  switch(this.followState){
    case "followed":
      this.$el.prop("disabled", false);
      this.$el.html("Unfollow!");
      break;
    case "unfollowed":
      this.$el.prop("disabled", false);
      this.$el.html("Follow!");
      break;
    case "following":
      this.$el.prop("disabled", true);
      this.$el.html("Following...");
      break;
    case "unfollowing":
      this.$el.prop("disabled", true);
      this.$el.html("Unfollowing...");
      break;
  }
};

module.exports = FollowToggle;
