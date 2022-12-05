export function readyPlayerMe() {
  const test_string =
    "https://avt-hub.com/7t2qZXb?embed_token=5689d41b9e8994901646505c99899f26&name=John%20Doe&glb=https%3A%2F%2Fmodels.readyplayer.me%2F637ca88a211e016e93c9caef.glb";
  // const readyPlayerMeData = window.location.href;
  const url = new URL(test_string);
  const isEmbedded = url.searchParams.get("embed_token");
  const avatarId = url.searchParams.get("glb");
  const displayName = url.searchParams.get("name");

  if (isEmbedded !== null) {
    // set session flag to to use for other pages
    sessionStorage.setItem("___hubs_is_embedded", true);

    // create and store user profile details
    const profile = {
      avatarId: avatarId,
      displayName: displayName
    };
    localStorage.setItem("___rpm_user_profile", JSON.stringify(profile));

    // update hubs profile details with newly created profile
    const hubsStore = JSON.parse(localStorage.getItem("___hubs_store"));
    const updatedHubsStore = { ...hubsStore, profile: profile };
    localStorage.setItem("___hubs_store", JSON.stringify(updatedHubsStore));
  } else {
    // set session flag to to use for other pages
    sessionStorage.setItem("___hubs_is_embedded", false);
  }
}
