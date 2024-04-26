async function POST({ request }) {
  const formData = await request.formData();
  return new Response(
    JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password")
    })
  );
}
async function GET({ request }) {
  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/"
    })
  );
}

export { GET, POST };
