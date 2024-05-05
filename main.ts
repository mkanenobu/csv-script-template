import * as csv from "jsr:@std/csv";

const parseCsv = async (filepath: string) => {
  const fileContents = await Deno.readFile(filepath);
  const dataString = new TextDecoder().decode(fileContents);
  const parsedResult = csv.parse(dataString);
  const [header, ...records] = parsedResult;
  return {
    header,
    records,
  }
}

const main = async () => {
  const filepath = "./dummy-data.csv"
  const { header, records } = await parseCsv(filepath);

  console.log({
    header,
    records,
  });
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await main();
}
