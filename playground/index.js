import { get_encoding } from "tiktoken";

const encoding = get_encoding("cl100k_base");
// cl100k_base is an encoding. An encoding is a dictionary that maps token IDs to tokens. Ej: 904 => "hello"
// cl => chat language 100k => 100,000 unique tokens

const tokens = encoding.encode(
  "Hello, world!. This is the first time I use tiktoken."
);

console.log({ tokens });
// {
//   tokens: Uint32Array(14) [
//     9906,  11, 1917, 15725,
//     1115, 374,  279,  1176,
//      892, 358, 1005, 87272,
//     5963,  13
//   ]
// }
// Each number is a token ID that maps to a token
// So when working with large amount of text, we can use the tick - token library to count tokens before sending a prompt to a LLM
