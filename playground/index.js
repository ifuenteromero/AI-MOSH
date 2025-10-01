import OpenAi from "openai";

const client = new OpenAi({
  apiKey: OPENAI_API_KEY,
});

const stream = await client.responses.create({
  model: "gpt-4.1",
  input: "Write a story about a robot",
  temperature: 0.7,
  max_output_tokens: 50,
  stream: true,
});

// Async iterable

for await (const event of stream) {
  if (event.delta) process.stdout.write(event.delta);
}
