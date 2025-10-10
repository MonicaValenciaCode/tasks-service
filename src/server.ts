import app from "./app";
const port = process.env.PORT ? Number(process.env.PORT) : 5000;

app.listen(port, () => {
  console.log(`app listening in port ${port}`);
});

export default app;
