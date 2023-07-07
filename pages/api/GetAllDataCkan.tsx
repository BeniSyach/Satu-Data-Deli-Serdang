import { NextApiRequest, NextApiResponse } from "next";
import getConfig from "next/config";

const dms = getConfig().publicRuntimeConfig.DMS;

export default async function handler(req, res) {
  try {
    // Handle GET request
    const response = await fetch(`${dms}/api/3/action/package_search`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(405).json({ message: "Method not allowed" });
  }
}
