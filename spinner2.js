

process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinners = ["|" , "/", "-", "\\", "|", "/", "-", "\\", "|"];

let delay = 100;
for (const spinnees of spinners){
  setTimeout(() => {
    process.stdout.write(`\r ${spinnees}`);
  }, delay)
  delay += 200;
}


setTimeout(() => {
  process.stdout.write('\n');}, 1900)
  

