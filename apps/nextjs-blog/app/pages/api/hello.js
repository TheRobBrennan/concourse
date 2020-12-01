export default (req, res) => {
  // IMPORTANT: API route code will never be a part of your client bundle, so you can safely write server-side code
  res.status(200).json({ text: "Hello" })
}
