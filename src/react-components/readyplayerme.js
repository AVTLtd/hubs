export function readyPlayerMe() {
  // const readyPlayerMeData = window.location.href;
  const test_string =
    "https://avt-hub.com/7t2qZXb?embed_token=5689d41b9e8994901646505c99899f26&name=tristan%20test&glb=https%3A%2F%2Fmodels.readyplayer.me%2F637ca88a211e016e93c9caef.glb";
  const url = new URL(test_string);
  const avatarId = url.searchParams.get("glb");
  const displayName = url.searchParams.get("name");

  const profile = {
    avatarId: avatarId,
    displayName: displayName
  };

  localStorage.setItem("___rpm_user_profile", JSON.stringify(profile));

  const hubsStore = JSON.parse(localStorage.getItem("___hubs_store"));

  const updatedHubsStore = { ...hubsStore, profile: profile };
  console.log("updatedHubsStore", updatedHubsStore);

  localStorage.setItem("___hubs_store", JSON.stringify(updatedHubsStore));
}
