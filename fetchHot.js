import fetch from "node-fetch";
import fs from "fs";
import moment from "moment";
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const delayRequest = 1 * 1000;

const delayLoop = 360 * 1000;

async function run() {
  let fileData = await fs.readFileSync("dataHot.txt", "utf8");
  let oldData = fileData.split("\n").map((item) => {
    let row = item.split("|");
    return row[0];
  });
  async function load() {
    for (let i = 1; i < 51; i++) {
      try {
        let response = await fetch(
          `https://www.midjourney.com/api/app/recent-jobs/?amount=50&jobType=upscale&orderBy=hot&user_id_ranked_score=null&jobStatus=completed&page=${i}&dedupe=true&refreshApi=0`,
          {
            headers: {
              accept: "*/*",
              "accept-language": "en-US,en;q=0.9",
              "sec-ch-ua":
                '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              cookie:
                "imageSize=medium; imageLayout_2=hover; getImageAspect=3; fullWidth=false; showHoverIcons=true; _ga=GA1.1.300504187.1675873837; __Host-next-auth.csrf-token=d81032b31fbfed516e23a06417e17d3cb04ede178e36f23c5a7d75fad1cfe88e%7C595833259ff9a47a7ada776b8e0ddaaedab462db46b65084e02097757f708d3f; __Secure-next-auth.callback-url=https%3A%2F%2Fwww.midjourney.com%2Fapp%2F; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..yQxvRcaFJqomlemj.Isf2Tj4PbJTYXOT64qLTHJAHrx6CSxO4O5730pKpZddyINd1p_fsweWYSXUsSPw03Ysp1bdjdp9H2LSYDpnMp6Rs1y8ocuxfXjkea8OCN5J0mDbnO_a4LBRgvfuUIwHvJUMN8DMXHHTTaZqKcaIE1-rV2RkLw1trbAw9cOSL_zwFdSFm-ZTd-MJtKSnieO5IjfOC5ZJfMjGTTvEdgy-dlwKbAKROBQomnAW4evWULNWHniW3NoPsVLwTJtZupb3wSMu3NEH8yy0gzSVL0Z5d-XsfCU0vTV4cr-AYi1S7tFDmnt7atcvunOhugo1wHzRTh3aield1su5lwA2sALQ0XLALm6GIXvomlHT--iOcXHGoJEfK5Ubd00PasYm9PWf7fzI-o3MkCekPcJSgCEEY6E6MScfgPhXi_t22jD7TeOnr3ms1PXRozn_IsJkdKSszV1Cy3TbrZINl4yqF7KQPUkYNLBzRTOXnfFM3UrHF_9jLuiywoFw5uJSSlTIWSojmk-bc1A2ofH8jd2g7RRsFLtweGhcn4EMgquIMRqjm9XllSA3VLeY3v_-fxUfH2AbD2F6B2WxIVd1MQ-VXYmRlqYyUXz5qPpicSwHUvXa6AZdBv6b6mfvjd1wHpXJidbwy1nWnLvp9uoAaTvoWmlINEzKaRpiRh-kjwZrJ70OOGJl1LxLJco9gUpCrDlWbOxUBwF6dVAUkeIObxod8X6ralNk51tQ1OKT1ZQAZu9Oq-EL0lFuVs9SMF6ayC4CT8sKWjD_MiV8M-GKDmFGZeYxCOtjqFFS068gRvYyTHq6xfqj_YbCYruw-oK3JS0U73dr5Vjd0UDTXXS9AATDnKAP4NJ2n2QEiSjUAfdRZSc0fvNrzDF1N9Id1x-5X9VNWnAM2CJ-TxkdwBoFQgkHjdzxLsY0zMIBOUjdYkR-ZEBaIkuvy1FFu5vhl61-NFVvWX7vtq2IvS2ypc5pV2qen_ltnwv_kt47cE2u8iLjk9m-OoToFbMskWRkFFaiAr--tLiro7rbNiTMQ3bYT5xJTfjXZqBYM3oz76rqECuJyLg2CiDzePUMAQXa8SRUFCFXclLDtmy_1XQ-GQlidoK53i9cyCWs5ar6kgtLrjxCh79yBEsJevcScZH3GlPiMj_NxNFbkbGFRJHFOZtpqglz3wGkmuMG1V8nnh4e2foCZYpd-MAUPoYj7W0GxpFIlyWnFiZJyWuCr7ORUanW2k_3rjt_Cs0puSlzMVaV6w4M6nKK8b_KxKik9JjnuvvWZzYuULMMdUyBMfFEudsee0X26tyz1DTMtZ9CW6bwtJfiqXKcHxpvD2K66GXwolsB4DavQ0X9SlQVsBQARzud2W42Ph8GUUZg0dmbuIGL9S8ssVa0n-zn2Aa8SXiPgMq4IBpy4Xvk6oS3vkOpmvWAQWV53X6GYOtyjyhZ6hBBtHHxFSDdIOuRKOaApW3XkGXT4J5EBpWrQisVGAc18kJ84eGOsUulhLGJyMNLZkHyorusN7Q.d5fzVZv_GaGIV_TeEyu-4g; __stripe_mid=c17bfdb9-668b-49f5-b6b6-ded031d92a02bfc774; __stripe_sid=5f62cd76-1f6a-4a96-af75-547434217b09157d0e; _dd_s=rum=2&id=b86ae85c-9b3d-4098-a7c9-c8408d70d52c&created=1675873836196&expire=1675874793792; _ga_Q0DQ5L7K0D=GS1.1.1675873836.1.1.1675873894.0.0.0",
              Referer: "https://www.midjourney.com/app/feed/all/",
              "Referrer-Policy": "strict-origin-when-cross-origin",
            },
            body: null,
            method: "GET",
          }
        );

        let result = await response.json();
        if (result && !!result.msg) {
          console.log("result: ", result);
          continue;
        }

        let mapResult = result.map((item) => {
          return {
            id: item.id,
            image: item.image_paths[0],
            full_command: item.full_command,
          };
        });
        for (let row of mapResult) {
          if (oldData.includes(row.id)) continue;
          if (
            !!row.full_command &&
            row.full_command.includes("<https://s.mj.run/")
          )
            continue;
          let dataRow = `${row.id}|${row.image}|${row.full_command}\n`;
          fs.appendFileSync("dataHot.txt", dataRow);
          let imageRow = `${row.image}\n`;
          fs.appendFileSync("imageHot.txt", imageRow);
        }
        await timer(delayRequest);
      } catch (error) {
        console.log("error: ", error);
      }
    }
    await timer(delayLoop);
    run();
  }
  load();
}

run();
