import { getProviders } from "next-auth/react";

export default async function handler(req, res) {
  const providers = await getProviders();
  //console.log("Providers", providers);
  res.status(200).json(providers);
  res.end();
}
