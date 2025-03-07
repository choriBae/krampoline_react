export async function summarizeReview(reviewText: string, creativity: number) {
  const requestBody = {
    prompt: reviewText,
    max_tokens: 100,
    temperature: creativity,
    top_p: 0
  };

  const apikey = "d2a171c15d08dac5fce2abcc4cf5a36f";
  try {
    const response = await fetch("/v1/inference/kogpt/generation", {
      method: "POST",
      headers: {
        credentials: "include",
        Authorization: `KakaoAK ${apikey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const summary_data = await response.json();
    console.log(summary_data.id);
    return summary_data.generations[0].text;
  } catch (error) {
    console.error("Error calling the KoGPT API:", error);
  }
}
