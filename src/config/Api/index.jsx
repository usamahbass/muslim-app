export const getSurah = () => {
  return new Promise((resolve, reject) => {
    fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
      .then(res => {
        return res.json();
      })

      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log(reject, err);
      });
  });
};

export const getAyat = item => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://al-quran-8d642.firebaseio.com/surat/${item}.json?print=pretty`
    )
      .then(res => {
        return res.json();
      })

      .then(result => {
        resolve(result);
      })
      .catch(err => {
        console.log(reject, err);
      });
  });
};
