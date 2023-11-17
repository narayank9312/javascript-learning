const p = new Promise((res, rej) => {
  res("promise get ressolved");
});

async function handlePromise(params) {
  const val = await p;
  console.log(val);
}

handlePromise();
