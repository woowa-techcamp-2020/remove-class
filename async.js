function runAsync(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('서버에서 온 사람입니다');
    }, time);
  });
}

function runAsync2(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('3명입니다');
    }, time);
  });
}

const cb1 = (result) => {
  console.log('누구세요? :', result);
  return runAsync(3000);
};

const cb2 = (result2) => {
  console.log('몇명이에요? :', result2);
};

async function main() {
  const str1 = await runAsync(1000);
  cb1(str1);

  const str2 = await runAsync(1000);
  cb2(str2);

  return '서버는 종료';
}

main().then(console.log);
