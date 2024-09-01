const apiGamesUrl = `https://${process.env.MOCKAPI_PROJECT_TOKEN}.mockapi.io/games`;

export async function getGames() {
  try {
    // TODO: add sort param
    const response = await fetch(apiGamesUrl, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });

    if(response.status === 404) {
      return {
        message: 'The API call returned a not found.'
      };
    } else {
      return response.json();
    }
    
  } catch (error) {
    return { message: `Failed to loads all the games: ${error}` };
  }
}
