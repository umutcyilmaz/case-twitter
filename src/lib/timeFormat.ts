import { IPost } from "@/types";


export const hesaplaFarkZaman = (post: IPost): string | null => {
  if (post && post.time) {
    const simdikiTarih = new Date();
    const farkMilisaniye = simdikiTarih.getTime() - post.time.getTime();

    const farkSaat = Math.floor(farkMilisaniye / (1000 * 60 * 60));
    const farkDakika = Math.floor(farkMilisaniye / (1000 * 60)) % 60;
    const farkSaniye = Math.floor(farkMilisaniye / 1000) % 60;

    let formatliFarkZaman = "";
    if (farkSaat >= 24) {
      formatliFarkZaman = post.time.toLocaleDateString();
    } else if (farkSaat > 0) {
      formatliFarkZaman = `${farkSaat} saat`;
    } else if (farkDakika > 0) {
      formatliFarkZaman = `${farkDakika} dakika`;
    } else {
      formatliFarkZaman = `${farkSaniye} saniye`;
    }
    return formatliFarkZaman;
  }
  return null;
};

