import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Perjalanan saya dalam pengembangan web didukung oleh serangkaian
            alat dan bahasa mistis, dengan JavaScript yang menjadi inti daya
            tarik saya. Saya menggunakan kerangka kerja seperti React.js dan
            Next.js dengan presisi, membuat portal (situs web) tanpa batas yang
            menghubungkan dunia (pengguna) di seluruh dunia digital. Seni kuno
            Jamstack memberdayakan saya untuk menciptakan pengalaman yang cepat,
            aman, dan dinamis, sementara keterampilan desain saya memastikan
            setiap kreasi tidak hanya fungsional tetapi juga menawan secara
            visual. Bergabunglah dengan saya saat saya terus menjelajahi bidang
            dan teknologi baru untuk membentuk masa depan web.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=novipro88&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Uthadev."
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=novipro88&theme=transparent&hide_border=true&locale=id&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Uthadev."
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,babel,bootstrap,cloudflare,css,figma,firebase,git,github,graphql,html,js,jquery,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Uthadev."
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=novipro88&theme=dark&hide_border=true&locale=id&background=45%2C5F2121%2C2E522A&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="Uthadev."
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/novipro88/imagepro-mkaiey"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=novipro88&repo=imagepro-mkaiey&theme=transparent&locale=id&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Uthadev."
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
