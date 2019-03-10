import { Read } from "./read";
import { Playback } from "./playback";

async function main() {
    const read = new Read();
    const records = await read.findAll();
    const playback = new Playback();
    await playback.bulkPlayback(records);
}

main();